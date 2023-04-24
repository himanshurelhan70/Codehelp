const express = require('express'); //import express
const app = express(); //initiate instance of express

const PORT = 6900;

// start a server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

// get request 
app.get('/getData', (req, res) => {
    // http://localhost:6900/getData
    // http://localhost:6900/getData?name=pompise
    const data = [
        {name: "himanshu", uid: "21mca2697"},
        {name: "jaadugar", uid: "21mca2023"},
    ];

    res.json({
        fromFrontend: req.query,
        fromBackend: data
    });
})

// middleware for post req./ put req
const bodyParser = require('body-parser');
// parsing json data and add it to the req.body
app.use(bodyParser.json());

// post request
app.post('/users/user', (req, res) => {
     // http://localhost:6900/users/user
    const {name, uid} = req.body;
    console.log(name);
    console.log(uid);
    res.send(`Post Request Successful name=${name} and uid=${uid}`);
})


// mongoose - connects express and mongoDB
// Connection to LocalServer - MongoDB Compass
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connection Established to MongoDB"))
.catch((error) => console.log("Received an error", error.message))


// connection to remote server - MongoDB Atlas
// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://himanshu:CvBKlSOuKl50SBaQ@cluster0.0ab3hvv.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("Connection Established"))
// .catch((error) => console.log("Received an error", error.message))
