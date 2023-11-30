const express = require('express');
const router = express.Router();
const user = require('../datamodel/Model1');
const { body, validationResult } = require('express-validator');

router.post(
  '/createuser',
  [
    body('email').isString().withMessage('Invalid email format'), // Change isEmail to isString

    body('password').isLength({ min: 3 }).withMessage('Password must contain at least 3 characters'),
  ],
  async (request, response) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const userData = {
        name: request.body.name,
        // location: request.body.location,
        email: request.body.email,
        password: request.body.password,
      };

      await user.create(userData);
      response.json({ success: true });
    } catch (error) {
      console.error('Error creating user:', error);
      response.status(500).json({ success: false, error: 'Internal server error' });
    }
  }
);



router.post(
  '/Login',
  [
    body('password').isLength({ min: 3 }).withMessage('Password must contain at least 3 characters'),
  ],
  async (request, response) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const userDatal = {
        email: request.body.email,
        password: request.body.password,
      };
      const emailexist=await user.findOne({email:userDatal.email});
      if(!emailexist){
        return response.status(400).json({errors:"try again"})
      }
      if(userDatal.password!==emailexist.password){
        return response.status(400).json({errors:"try again"})
      }

      return response.json({success:true})
    } catch (error) {
      console.error('Error creating user:', error);
      response.status(500).json({ success: false, error: 'Internal server error' });
    }
  }
);

module.exports = router;
