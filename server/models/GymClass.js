const mongoose = require('mongoose');

const gymClassSchema = new mongoose.Schema({
    name: {
        type: String, 
        required:[true, 'Class name is required'],
        trim: true
    },
    instructor: {
        type: String, 
        required: [true, 'Instructor name is required']
    },
    description: {
        type: String, 
        default: ''
    },

    schedule: {
        day:{
            type: String, 
            required: true,
            enum: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
        },
        startTime: {type:String, required: true},
        endTime: {type:String, required: true}
    },
    capacity: {
        type: Number, 
        required: true
    },
    enrolled:{
        type:Number, 
        default:0
    },
    category:{
        type:String, 
        enum:['yoga','cardio','strength','pilates','hiit','dance'],
        default:'cardio'
    },

    imageUrl: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('GymClass', gymClassSchema);