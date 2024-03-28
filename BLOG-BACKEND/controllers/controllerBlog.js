const bcrypt = require('bcrypt');
const Blog = require('../modle/blogs')
const jwt = require('jsonwebtoken')

exports.createBlog = async (req,res) => {

    const {title , discription ,imgUrl} =req.body
    const blog = await Blog.create({title , discription ,imgUrl,user:req.harsh})

    res.status(200).json({
        success:true,
        message:"blog added successsfully"
    })
}

exports.myBlog = async (req,res) => {

    const userid = req.harsh._id;
    const blogs = await Blog.find({user:userid})

    res.status(200).json({
        success:true,
        blogs,
        message:"get all your blog successsfully"
    })

}

exports.updateBlog = async (req,res) => {

    const {title , discription ,imgUrl} =req.body;
    const id=req.params.id;

    const blog = await Blog.findById({_id:id})

    if(!blog){

        res.status(400).json({
            success:false,
            message:"invalid id"
        })

    }

    blog.title=title,
    blog.discription=discription,
    blog.imgUrl=imgUrl

    blog.save()


    res.status(200).json({
        success:true,
        blog,
        message:"blog updated successsfully"
    })

}

exports.deleteBlog = async (req,res) => {

    const id=req.params.id;

    const blog = await Blog.findById({_id:id})

    if(!blog){

        res.status(400).json({
            success:false,
            message:"invalid id"
        })

    }

    await Blog.deleteOne()

    res.status(200).json({
        success:true,
        message:"blog deleted successsfully"
    })

}

exports.getAllBlogs  = async (req,res) => {

    const blogs = await Blog.find()

    if(!blogs){
        res.status(404).json({
            success:false,
            message:"there is no blogs"
        })
    }
    res.status(200).json({
        success:true,
        blogs,
        message:"get all  blog successsfully"
    })

}

exports.getBlogById = async (req,res) => {

    
    const id=req.params.id;

    const blog = await Blog.findById({_id:id})

    if(!blog){

        res.status(400).json({
            success:false,
            message:"invalid id"
        })

    }


    res.status(200).json({
        success:true,
        blog,
        message:"blog updated successsfully"
    })

   

}