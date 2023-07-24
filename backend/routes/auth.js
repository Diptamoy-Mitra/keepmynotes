const User=require('../models/User')
const express=require('express');
const router=express.Router();


// create a user using POST "/api/auth/" Does not require Auth
router.get('/',(req,res)=>{ 
    // res.json([]);
    console.log(req.body);
    // res.send("Hello")
    const user=User(req.body);
    user.save()
    res.send(req.body)
})

module.exports = router;