const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type:String, 
        required:[true, 'Name is required'], 
        trim:true
    },
    email: {
        type:String, 
        required: [true, 'Email is required'], 
        unique:true, 
        lowercase:true
    },
    password: {
        type:String, 
        required: [true, 'Password is required'], 
        minlength:6
    },
    membershipType: {
        type:String,
        enum:['basic','premium','vip'],
        default:'basic'
    },
    joinedAt: {
        type:Date, 
        default:Date.now
    }
});

module.exports = mongoose.model('User', userSchema);