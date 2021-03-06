const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config/keys')
const requireLogin = require('../middleware/requireLogin')

// router.get('/protected',requireLogin,(req,res)=>{
//     res.send("Hello User")
// })

router.post('/signup',(req,res)=>{
    const {name,email,password,pic} = req.body
    if(!name || !email || !password){
        return res.status(422).json({error: "please enter all required fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error: "user already exists with that email"})
        }
        bcrypt.hash(password, 12)
        .then(hashedpassword=>{
            const user = new User({
                name,
                email,
                password:hashedpassword,
                pic:pic
            }) 
        
            user.save()
            .then(user=>{
                res.json({message:"saved sucessfully"})
            })
            .catch(err=>{
                console.log(err)
            })
        })
    })
    .catch(err=>{
        console.log(err) 
    })
})

router.post('/signin',(req,res)=>{
    const{email,password} = req.body
    if (!email || !password) {
        res.status(442).json({error:"Plese add email or password."})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(442).json({error:"Invalid email or password."})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                // res.json({message:"Successfully signed in"})
                const token = jwt.sign({_id:savedUser._id}, JWT_SECRET)
                const {_id,name,email,followers,following,pic} = savedUser
                res.json({token,user:{_id,name,email,followers,following,pic}})

            }
            else{
                return res.status(442).json({error:"Invalid email or password."}) 
            }
        })
        .catch(err=>{ 
            console.log(err)
        })
    })
})

module.exports = router