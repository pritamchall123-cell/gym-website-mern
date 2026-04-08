const express  = require('express');
const router   = express.Router();
const GymClass = require('../models/GymClass');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  try {
    const classes = await GymClass.find()
      .sort({ 'schedule.day': 1, 'schedule.startTime': 1 });
    res.json(classes);
  } catch (e) { 
    res.status(500).json({ message: e.message }); 
  }
});

router.get ('/:id', async(req, res)=>{
  try{
    const gymClass = await GymClass.findById(req.params.id);
    if(!gymClass)
      return res.status(404).json({message:'Class not found'});
    res.json(gymClass);
  } catch(e){
    res.status(500).json({message: e.message});
  }
});

router.post('/', auth, async(erq, res)=>{
  try{
    const gymClass = await new GymClass(req.body).save();
    res.status(201).json(gymClass);
  } catch(e){
    res.status(400).json({message: e.message});
  }
});

module.exports = router;