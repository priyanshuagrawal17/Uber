const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
   fullname: {
    firstname: {
        type: String,
        required: true,
        minlength: [3, 'Minimum length is 3 characters'],
    },
    lastname: {
        type: String,
        minlength: [3, 'Minimum length is 3 characters'],
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match   : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: true,
    select: false,   
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive',
  },
   vechile: {
     color: {
        type: String,
        required: true,
        minlength: [3, 'Minimum length is 3 characters'],
     },
     plate:{
        type: String,
        required: true,
        minlength: [3, 'Minimum length is 3 characters'],
     },
     capacity:{
        type: Number,
        required: true,
        min: [1, 'Minimum length is 1 characters'],
     },
     vechicleType:{
        tyoe: String,
        required: true,
        enum: ['car', 'motorcycle', 'autorickshaw'],
     }
   },
   location:{
    latitude: {
        type: Number,      
    },
    longitude: {
        type: Number,
    }
   }
 
})

captainSchema.methods.generateAuthToken = async function () {
   const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{expiresIn: '24h'})
       return token;
   }

   captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const captainModel =  mongoose.model('captain', captainSchema);

module.exports = captainModel;