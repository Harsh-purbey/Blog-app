require('dotenv').config();
const express = require('express')
const cookieparser =require('cookie-parser')
const app = express();
const userRoute = require('./routes/user')
const blogRoute = require('./routes/blog')
const cors = require('cors')



app.use(express.json())
app.use(cookieparser())
app.use(cors({
    credentials:true
}))
app.use('/api',userRoute)
app.use('/api/blog',blogRoute)



const DBConnect = require('./config/database');
DBConnect();



const PORT =process.env.PORT;

app.listen(PORT , () => {
    console.log(`Server Started at PORT ${PORT}`);
})