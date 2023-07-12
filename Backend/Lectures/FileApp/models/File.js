const mongoose = require("mongoose");
const nodemailer = require('../config/nodemailer');

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
    },
    tags: {
        type: String,
    },
    email: {
        type: String,
    }
});


// post middleware
fileSchema.post("save", async function (doc) {
    try {
        console.log("DOC", doc)

        // connecting to nodemailer
        const transporter = nodemailer.connect();

        //send mail 
        let info = await transporter.sendMail({
            from: `himanshurelhan70@gmail.com`,
            to: doc.email,
            subject: "New File Uploaded on Cloudinary",
            html: `<h2>Hello ${doc.name} </h2> 
            <p>File has been successfully Uploaded </p>
            <p>View here: <a href="${doc.url}">${doc.url}</a></p>
            `,
        });

        console.log("INFO of mail", info);


    }
    catch (error) {
        console.error(error);
    }
})


const File = mongoose.model("File", fileSchema);
module.exports = File;