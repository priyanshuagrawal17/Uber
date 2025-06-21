const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');

// module.exports.registerUser = async (req, res, next) => {
 
//  const errors = validationResult(req);
//  if (!errors.isEmpty()) {
//      return res.status(400).json({ errors: errors.array() });
//  }   
// console.log(req.body);

//  const { fullname, email, password } = req.body;

//  const hashedPassword = await userService.hashPassword(password);

//  const user = await userService.cerateUser({
//      firstname: fullname.firstname,
//      lastname: fullname.lastname,
//      email,
//      password: hashedPassword
//  });


//  const token = user.generateAuthToken();

//  res.status(201).json({
//      user,
//      token
//  });
// }

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
  
    try {
        
        const { fullname, email, password } = req.body;
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
  