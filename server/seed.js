// seed.js - Run this ONCE to add sample classes to your database
// Run with: node seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const GymClass = require('./models/GymClass');

const sampleClasses = [
  {
    name:        'Morning Yoga',
    instructor:  'Priya Sharma',
    description: 'Start your day with a calming yoga session for all levels',
    schedule:    { day: 'Monday', startTime: '06:00', endTime: '07:00' },
    capacity:    20, category: 'yoga'
  },
  {
    name:        'HIIT Blast',
    instructor:  'Rahul Verma',
    description: 'High intensity interval training to burn maximum calories',
    schedule:    { day: 'Monday', startTime: '08:00', endTime: '09:00' },
    capacity:    15, category: 'hiit'
  },
  {
    name:        'Cardio Kickboxing',
    instructor:  'Amit Singh',
    description: 'Fun cardio workout combining martial arts and dance',
    schedule:    { day: 'Tuesday', startTime: '07:00', endTime: '08:00' },
    capacity:    18, category: 'cardio'
  },
  {
    name:        'Strength Training',
    instructor:  'Vikram Patel',
    description: 'Build muscle and increase strength with weight training',
    schedule:    { day: 'Wednesday', startTime: '09:00', endTime: '10:00' },
    capacity:    12, category: 'strength'
  },
  {
    name:        'Pilates Flow',
    instructor:  'Neha Gupta',
    description: 'Improve flexibility and core strength with pilates',
    schedule:    { day: 'Thursday', startTime: '10:00', endTime: '11:00' },
    capacity:    16, category: 'pilates'
  },
  {
    name:        'Zumba Dance',
    instructor:  'Sneha Reddy',
    description: 'High energy Latin dance fitness class for everyone',
    schedule:    { day: 'Friday', startTime: '06:30', endTime: '07:30' },
    capacity:    25, category: 'dance'
  },
  {
    name:        'Weekend Yoga',
    instructor:  'Priya Sharma',
    description: 'Relaxing weekend yoga session, perfect for beginners',
    schedule:    { day: 'Saturday', startTime: '08:00', endTime: '09:30' },
    capacity:    20, category: 'yoga'
  },
  {
    name:        'Sunday HIIT',
    instructor:  'Rahul Verma',
    description: 'End the week strong with this intense HIIT session',
    schedule:    { day: 'Sunday', startTime: '07:00', endTime: '08:00' },
    capacity:    15, category: 'hiit'
  }
];

mongoose.connect(process.env.MONGO_URI, { family: 4 })
  .then(async () => {
    console.log('Connected to MongoDB');
    await GymClass.deleteMany({}); // clear existing classes
    await GymClass.insertMany(sampleClasses);
    console.log('8 sample classes added successfully!');
    console.log('You can now see them at http://localhost:3000/classes');
    mongoose.connection.close();
  })
  .catch(err => console.error('Error:', err.message));
