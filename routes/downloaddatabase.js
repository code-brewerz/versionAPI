const express = require('express')

const router = express.Router();

const version = require('../models/Version')    
//getting userdb
router.get('/:userId',async(req,res)=>{
   const  user_id = req.params.userId
   try{
       ver = await version.findById(user_id)
       if(ver == null){
           res.send("Invalid User Id")
       }else{
           res.json(ver)
       }
   }catch(err){
       res.json({message:err.message})
   }
})

module.exports = router