
const bcrypt = require('bcrypt');
const User = require('../modle/User')
const jwt = require('jsonwebtoken')



exports.userLogin = async(req , res) => {

    const {gmail , password} = req.body;

    const userfind = await User.findOne({gmail})

    if(!userfind){
        return  res.status(404).json({
            success:false,
            message:"user not exist",
        })
    }


    if(await bcrypt.compare(password,userfind.password)){

        const token = jwt.sign({_id:userfind._id},"HARSH")

        res.status(200).cookie('token',token,{
            httpOnly:true,
            maxAge:10*60*1000
        }).json({
            success:true,
            message:`wlcome ${userfind.name}`,
        })

    }
    else{
        return  res.status(404).json({
            success:false,
            message:"invalid credential",
        })
    }


}



exports.userRegister =  async (req , res) => {

    const {name , gmail , password} = req.body;

    const userexist = await User.findOne({gmail});

    if(userexist){
        return  res.status(404).json({
            success:false,
            message:"user already exist",
        })
    }

    const hashpassword = await bcrypt.hash(password,10)
    const user = await User.create({name , gmail , password:hashpassword})

    const token = jwt.sign({_id:user._id},"HARSH")

    res.status(200).cookie('token',token,{
        httpOnly:true,
        maxAge:10*60*1000
    }).json({
        success:true,
        user,
        message:"user registered successfully",
    })

}


exports.getMyProfile = async (req , res) => {

   
    
    console.log(req.harsh);
    res.status(200).json({
        success:true,
        user:req.harsh
    })


}

exports.getUserById =  async (req , res) => {
    const id=req.params.id;

   const user = await User.findById({_id:id})

if(!user){

    res.status(400).json({
        success:false,
        message:"invalid id"
    })

}


res.status(200).json({
    success:true,
    user,
    message:"this is the single successsfully"
})

}


exports.userLogout = (req , res) => {
    res.status(200).cookie("token","",{
        expires : new Date(Date.now())
    }).json({
        success:true,
        message:"logout successfully"
    })
}

