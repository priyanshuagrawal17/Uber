const captainModel = require('../models/captain.model');
const bcrypt = require('bcryptjs');

module.exports.createCaptain = async ({
   firstName,lastName,email,password,
   color, plate, capacity, vehicleType
}) => {
     if(!firstName || !lastName || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error('All fields are required');
     }
     const captain = captainModel.create({
        fullName:{
            firstName,lastName
        },
        email,
        password,
        vehicle:{
            color,plate,capacity,vehicleType
        }
     })
     return captain;
}

module.exports.hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};