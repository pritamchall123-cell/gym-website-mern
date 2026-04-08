const express  = require('express');
const router   = express.Router();
const Booking  = require('../models/Booking');
const GymClass = require('../models/GymClass');
const auth     = require('../middleware/auth');

router.use(auth);

router.post('/', async (req, res) => {
  try {
    const {classId} = req.body;

    const gymClass = await GymClass.findById(req.body.classId);
    if (!gymClass)
      return res.status(404).json({ message: 'Class not found' });

    if (gymClass.enrolled >= gymClass.capacity)
      return res.status(400).json({ message: 'Sorry, this class is full' });

    const booking = await new Booking({
      user: req.userId,
      gymClass: classId
    }).save();

    await GymClass.findByIdAndUpdate(
      classId,
      { $inc: { enrolled: 1 } }
    );
    res.status(201).json({ message: ' Class Booked Successfully!', booking });

  } catch (e) {
    if (e.code === 11000)
      return res.status(400).json({ message: 'You Already Booked this class.' });
    res.status(500).json({ message: e.message });
  }
});

router.get('/my', async (req, res) => {
  try {
    const bookings = await Booking
      .find({ user: req.userId, status: 'confirmed' })
      .populate('gymClass', 'name instructor schedule category capacity enrolled')
      .sort({bookedAt: -1});
    res.json(bookings);
  } catch (e) { 
    res.status(500).json({ message: e.message }); }
});

router.delete('/:id', async (req, res) => {
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      user: req.userId
    });

    if (!booking)
      return res.status(404).json({ message: 'Booking not found' });

    booking.status = 'cancelled';
    await booking.save();

    await GymClass.findByIdAndUpdate(
      booking.gymClass,
      { $inc: { enrolled: -1 } }
    );

    res.json({ message: 'Booking cancelled' });
  } catch (e) { 
    res.status(500).json({ message: e.message }); 
  }
});

module.exports = router;
