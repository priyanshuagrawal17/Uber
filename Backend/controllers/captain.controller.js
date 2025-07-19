const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const blacklistTokenModel = require('../models/blacklistToken.model');
const {validationResult } = require('express-validator');


module.exports.registerCaptain = async (req, res, next) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }  
  const {fullName, email, password, vehicle} = req.body;

  const isCaptainAlreadyExist = await captainModel.findOne({email});
  if(isCaptainAlreadyExist){
      return res.status(400).json({message:'Captain already exist'});
  }
  const hashedPassword = await captainService.hashPassword(password);

  const captain = await captainService.createCaptain({
      firstName: fullName.firstName,
      lastName: fullName.lastName,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType
  });

  const token  = captain.generateAuthToken();

  res.status(200).json({
      captain,
      token
  });

}

module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;

  console.log('Login attempt for email:', email);

  const captain = await captainModel.findOne({email}).select('+password');

  if(!captain){
      console.log('No captain found for email:', email);
      return res.status(400).json({message:'invalid Email or password'});
  }

  console.log('Captain found. Hashed password in DB:', captain.password);

  const isMatch = await captain.comparePassword(password);

  console.log('Password match result:', isMatch);

  if(!isMatch){
      console.log('Password did not match for email:', email);
      return res.status(400).json({message:'invalid Email or password'});
  }

  const token  = captain.generateAuthToken();

  res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
  });
  
  res.status(200).json({
      captain,
      token
  });
}

module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json({captain: req.captain});
}

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    await blacklistTokenModel.create({ token });
    
    res.clearCookie('token');

    res.status(200).json({message: 'Logged out successfully'});
}