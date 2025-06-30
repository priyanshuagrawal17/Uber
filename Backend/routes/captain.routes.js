const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

router.post('/register', [
    body('email').isEmail().withMessage('Email is required'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('Firstname must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vechicle.color').isLength({ min: 3 }).withMessage('Vechicle color must be at least 3 characters long'),
    body('vechicle.plate').isLength({ min: 3 }).withMessage('Vechicle plate must be at least 3 characters long'),
    body('vechicle.capacity').isInt({ min: 3 }).withMessage('capacity must be at least 1'),
    body('vechicle.vechicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vechicle type'),
],
    userController.registerCaptain
)
module.exports = router;