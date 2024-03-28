const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    gmail:{
        type:String,
        unique:true,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})

module.exports = mongoose.model('User',userSchema)