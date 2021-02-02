const express = require('express')

const router = express.Router();

const version = require('../models/Version')

// getting versioncheck
router.get('/:versionId',async (req,res)=>{
   const ver_id = req.params.versionId
   try{
       ver = await version.findOne({ActiveYN:"Y"})
       if(ver.versionId < ver_id){
           res.send("Invalid")
       }else if(ver.versionId > ver_id){
           res.send("Download")
       }else{
           res.send("Valid")
       }
   }catch(err){
       res.json({message:err.message})
   }
})

module.exports = router