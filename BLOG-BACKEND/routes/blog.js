const express = require('express');
const route = express.Router();

const {isAuth} = require('../middlewear/auth')
const {createBlog ,myBlog ,updateBlog,deleteBlog ,getAllBlogs ,getBlogById} = require('../controllers/controllerBlog')



route.post('/createblog',isAuth,createBlog)

route.get('/myblogs',isAuth,myBlog)

route.put('/:id',isAuth,updateBlog)

route.delete('/:id',isAuth,deleteBlog)

route.get('/allblogs',getAllBlogs)

route.get('/blog/:id',isAuth,getBlogById)










module.exports = route;