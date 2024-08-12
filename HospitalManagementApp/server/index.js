const express = require("express")
const mongoose = require ("mongoose")
const cors = require("cors")
const UserModel = require('./models/UserDetails')

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/HospitalManagementApp");

app.post('/Register', (req,res) => {
    UserModel.create(req.body)
    .then(HospitalManagementApp => res.json(HospitalManagementApp))
    .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("Server is running");
})