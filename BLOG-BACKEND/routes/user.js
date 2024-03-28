const express = require('express');
const route = express.Router();

const {userRegister , userLogin ,getMyProfile, userLogout ,getUserById } = require('../controllers/controllerUser')
const {isAuth} = require('../middlewear/auth')




//login

route.post('/user/login',userLogin)

//register


route.post('/user/register',userRegister)



//getmyprofile

route.get('/user/myprofile',isAuth,getMyProfile)

//logout

route.get('/user/logout',userLogout )

route.get('/:id',getUserById)



module.exports = route;