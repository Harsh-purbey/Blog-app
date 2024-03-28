
const bcrypt = require('bcrypt');
const User = require('../modle/User')
const jwt = require('jsonwebtoken')

exports.isAuth = async (req , res , next) => {
    const { token } = req.cookies
    console.log(token);

    if(!token){
        return res.status(404).json({
            success:false,
            message:"please login..."
        })
    }

    const decode = jwt.verify(token,"HARSH")
    console.log(decode._id);

    req.harsh= await User.findById({_id:decode._id})
    next();
}