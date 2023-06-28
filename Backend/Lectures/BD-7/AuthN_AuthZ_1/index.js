const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const {dbConnect} = require("./config/database");
dbConnect();

// import route and mount them
const router = require("./routes/user")
app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})