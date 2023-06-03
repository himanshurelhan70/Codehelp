const mongoose = require('mongoose');
require('dotenv').config();

function dbConnect(){
    const response = mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Database connected successfully"))
    .catch((err) => {
        console.log("Database connection failed ", err.message);
        process.exit(1); 
    })
}       

module.exports = dbConnect;