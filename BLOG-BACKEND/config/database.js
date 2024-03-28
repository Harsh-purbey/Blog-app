const mongoose = require('mongoose');

const URL = process.env.DATABASE_URL;

const DBConnect = async () => {

   await mongoose.connect(URL)
    .then( () => {
        console.log("DB CONNECTED");
    })
    .catch( (error) => {
        console.error(error);
    })

}

module.exports = DBConnect;