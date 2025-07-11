const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const blacklistTokenModel = require('../models/blacklistToken.model');
const {validationResult } = require('express-validator');


module.exports.registerCaptain = async (req, res, next) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }  
  const {fullname, email, password, vehicle} = req.body;

  const isCaptainAlreadyExist = await captainModel.findOne({email});
  if(isCaptainAlreadyExist){
      return res.status(400).json({message:'Captain already exist'});
  }
  const hashedPassword = await captainService.hashPassword(password);

  const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vechicleType: vehicle.vechicleType
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

  const captain = await captainModel.findOne({email}).select('+password');
 
  if(!captain){
      return res.status(400).json({message:'invalid Email or password'});
  }

  const isMatch = await captain.comparePassword(password);

  if(!isMatch){
      return res.status(400).json({message:'invalid Email or password'});
  }

  const token  = captain.generateAuthToken();

  res.cookies('token', token);
  
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
    
    res.cookie('token');

    res.status(200).json({message: 'Logged out successfully'});
}