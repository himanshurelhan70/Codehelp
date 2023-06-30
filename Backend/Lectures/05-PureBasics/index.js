// learned pure basics of backend - refer to slides folder to learn more

const express = require("express");
const app = express();
const port = 3000;

//adding middleware
app.use(express.json());

//get request
app.get("/", (req,res) => {
    res.send(`<h1>This is Heading</h1>`)
})

app.post("/car", (req, res) => {
    res.send("Received a post request");
});

app.listen(port ,() => {
    console.log("App started");
})