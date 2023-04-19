const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchUser=require('../middleware/fetchUser')
const JWT_SECRET = 'IAMAGOODBOY'

router.post('/createuser', [
  body('email', 'Enter a valid email').isEmail(),
  body('name', 'Enter a valid name').isLength({ min: 5 }),
  body('password', 'Password should be at least 5 characters long').isLength({ min: 5 })
], async (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Check if user already exists
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const salt= await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password,salt)
    // Create a new user
    user = await User.create({
      email: req.body.email,
      name: req.body.name,
      password: securePassword,
    });

    const data={user:{id:user.id}}
    const authtoken = jwt.sign( data,JWT_SECRET);
    console.log(authtoken)
    res.json({authtoken });
  }
  catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }

});


// to authenticat})e user
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()

  ], async (req, res) => {

    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

const {email,password} = req.body
try{

    let user = await User.findOne({email})
    if(!user){
        return(res.status(400).json({error:"Please try to login with correct credential"}))
    }

    const passwordCompare =   bcrypt.compare(password,user.password)
    if(!passwordCompare){
        return(res.status(400).json({error:"Please try to login with correct credential"}))

    }

    const payload = {user : {id:user.id}}
    const authtoken = jwt.sign( payload,JWT_SECRET);
    res.json({authtoken });

}catch (error){


    console.log(error);
    res.status(500).send('Server error');
}
  })










// get user details

router.post('/getuser',fetchUser,async (req, res) => {
    try{
        const userId=req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)
    }
    catch(error){
        console.log(error);
        res.status(500).send('Server error');
    }
  })


module.exports = router;

