require("dotenv").config();
const mongoose = require("mongoose");

exports.dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB connected"))
    .catch((err) => {
        console.log(`error in DB connection`, err);
        process.exit(1);
    })
}