const mongoose = require ('mongoose');

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'User', 
        required: true
    },
    gymClass: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'GymClass', 
        require: true
    },
    bookedAt: {
        type: Date, 
        default:Date.now
    },
    status: {
        type:String, 
        enum: ['confirmed','cancelled'], 
        default: 'confirmed'}
});

//prevent same user booking the same class twice
bookingSchema.index({user: 1, gymClass:1},{unique:true});

module.exports = mongoose.model('Booking', bookingSchema);