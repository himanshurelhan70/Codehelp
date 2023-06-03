const express = require('express');
require("dotenv").config();
// const routes = require('./routes/postRoute');
const dbConnect = require('./config/dbConnect');

const app = express();
const PORT = process.env.PORT || 6900;

// middleware
app.use(express.json());

// mounting
// app.use('/app/v1', routes);

dbConnect();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    console.log('Received Get Request');
    res.status(200).send('<h1>This is Homepage.</h1>')
})


