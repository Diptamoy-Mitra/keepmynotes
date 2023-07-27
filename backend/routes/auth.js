const User = require('../models/User')
const express = require('express');
const router = express.Router();
const { query, validationResult, body } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken')
const JWT_SECRET='Harryisagoodb$oy'

// create a user using POST "/api/auth/createUser" Does not require Auth, No log in required
router.post('/', [
  body('email', 'Enter a valid email ').isEmail(),
  body('name', 'Enter a valid name ').isLength({ min: 3 }),
  body('password', 'password must be atleast 5 words').isLength({ min: 5 }),

], async (req, res) => {
  // res.json([]);
  // console.log(req.body);
  // res.send("Hello")
  // const user=User(req.body);
  // user.save()


  //if error return bad request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //check that user email already exist or not



  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({ error: 'sorry user with this email already exists' })
    }


    const salt =await bcrypt.genSalt(10);

    const secPass = await bcrypt.hash(req.body.password, salt);

    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    })

    //   .then(user => res.json(user))
    //   .catch((err)=>{
    //     console.log(err)

    //     res.json({error: 'Please enter a unique value',message: err.message})


    const data={
      user:{
        id: user.id,
      }
    }

    const authtoken=jwt.sign(data, JWT_SECRET);
   
    // console.log(jwtData);
  
    // res.json(user);
    res.json({authtoken})

    // res.send(req.body);
  } catch (error) {
    console.log(error)
    res.status(500).send("some error occures")
  }

})
module.exports = router;