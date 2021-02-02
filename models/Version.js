const mongoose = require('mongoose')

const versionSchema = new mongoose.Schema({
    versionId:{
        type:Number,
        required:true
    },
    versionDateTime:{
        type:Date,
        default: Date.now,

    },
    ActiveYN:{
        type:String,
        required:true
    },
    versionName:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('version',versionSchema)