const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')

require('./models/user')

app.use(require('./routes/auth'))

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 
mongoose.connection.on('connected',()=>{
    console.log("Connected to MongoDB yeah!!")
})

mongoose.connection.on('error',(err)=>{
    console.log("error connecting", err)
})

app.listen(PORT,()=>{
    console.log("server is running on", PORT)
})