require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const app = express();

app.use(express.json())

DB_CONNECTION = "mongodb+srv://admin-sakha:H0NZviCRhIaG2tph@cluster0.rw3cj.mongodb.net/versions?retryWrites=true&w=majority";

mongoose.connect(DB_CONNECTION,{useNewUrlParser:true,useUnifiedTopology: true},(err)=>{
    if(err){
        console.error(err);
    }
    console.log('Database Initiated');
})

const db =  mongoose.connection

const version = require('./models/Version')

const checkdatabaseversion = require('./routes/checkdatabaseversion')
app.use('/checkdatabaseversion',checkdatabaseversion)

const downloaddatabase= require('./routes/downloaddatabase')
app.use('/downloaddatabase',downloaddatabase)

app.get('/',async (req,res)=>{
    try{
        const versions = await version.find()
        res.json(versions)
    }catch(err){
        res.json({message:err.message})
    }
})

// app.post('/',async (req,res)=>{
//     const ver = new version({
//         versionId:req.body.versionId,
//         ActiveYN:req.body.ActiveYN,
//         versionName:req.body.versionName
//     })
//     try{
//         const new_ver = await ver.save();
//         res.json(new_ver)
//     }catch(err){
//         res.json({message:err.message})
//     }
// })


app.listen(3000,()=>{
    console.log('Server Initiated');
})




