const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const blacklistToken = require('../models/blacklistToken.model');

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
  
    try {
        
        const { fullname, email, password } = req.body;

        const isUserAlreadyExist = await userModel.findOne({email});
        if(isUserAlreadyExist){
            return res.status(400).json({message:'User already exist'});
        }
        const hashedPassword = await userService.hashPassword(password);
  
        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword
        });
  
        const token = user.generateAuthToken();
  
        res.status(201).json({
            user,
            token
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = await userModel.findOne({email}).select('+password');

    if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isMatch = await userService.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = user.generateAuthToken();

    res.cookie('token', token, {
      
    })

    res.status(200).json({
        user,
        token
    });

    res.status(200).json({
        user,
        token
    });
    
  }
  

  module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user);
  }

  module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    await blacklistToken.create({ token });
    res.status(200).json({ message: 'Logged out successfully' });
  }