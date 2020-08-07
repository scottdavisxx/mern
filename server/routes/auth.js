const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")


router.get('/',(req,res)=> {
    res.send("hello")
})

router.post('/signup',(req,res)=>{
    const {name,email,password} = req.body
    if(!name || !email || !password){
        return res.status(422).json({err: "please enter all required fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({err: "user already exists with that email"})
        }
        const user = new User({
            name,
            email,
            password
        })

        user.save()
        .then(user=>{
            res.json({message:"saved sucessfully"})
        })
        .catch(err=>{
            console.log(err)
        })

    })
    .catch(err=>{
        console.log(err) 
    })
})

module.exports = router