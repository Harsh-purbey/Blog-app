const mongoose = require('mongoose')

const blogsSchema = new mongoose.Schema({

    title:{
        type:String,
        require:true
    },
    discription:{
        type:String,
        require:true,
    },
    imgUrl:{
        type:String,
        require:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    createdAt:{
        type:Date,
        require:true,
        default:Date.now()
    }
})

module.exports = mongoose.model('Blog',blogsSchema)