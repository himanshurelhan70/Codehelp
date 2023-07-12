//app create
const express = require("express");
const cors = require('cors');
const app = express();

// access environment variables 
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//adding middleware
app.use(express.json());
app.use(cors());

const fileupload = require("express-fileupload");
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

// connecting to DB
const db = require("./config/database");
db.connect();

// connecting to Cloudinary
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// Mounting Routes
const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload', Upload);

// Activating Server
app.listen(PORT, () => {
    console.log(`App is running at PORT ${PORT}`);
})