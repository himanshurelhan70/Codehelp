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
        sentData: req.query,
        receivedData: data
    });
})

// middleware for post req.
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// post request
app.post('/users/user', (req, res) => {
    const {name, uid} = req.body;
    console.log(name);
    console.log(uid);
    res.send(`Post Request Successful name=${name} and uid=${uid}`);
})

// mongoose - connects express and mongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://himanshu:CvBKlSOuKl50SBaQ@cluster0.0ab3hvv.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connection Established"))
.catch((error) => console.log("Received an error", error.message))


