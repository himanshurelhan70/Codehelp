const mongoose = require("mongoose");
const nodemailer = require("../config/nodemailer");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
  },
});

// post middleware
userSchema.post("save", async function (doc) {
  try {
    console.log("DOC", doc);

    // connecting to nodemailer
    const transporter = nodemailer.connect();

    //send mail
    let mailThem = await transporter.sendMail({
      from: '"Himanshu Relhan" <himanshurelhan70@gmail.com>',
      to: doc.email,
      subject: "Thanks for visiting my portfolio website",
      html: `<!DOCTYPE html>
            <html>
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Thank You for Contacting Me</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  background-color: #f5f5f5;
                }
            
                h2 {
                  color: #007BFF;
                  margin-bottom: 10px;
                }
            
                p {
                  margin: 0 0 10px;
                }
            
                .message-box {
                  background-color: #fff;
                  border: 1px solid #e1e1e1;
                  padding: 20px;
                }
            
                .signature {
                  margin-top: 30px;
                  text-align: right;
                }
            
                .signature p {
                  margin: 0;
                }
              </style>
            </head>
            <body>
              <div class="message-box">
                <h2>Hello ${doc.name},</h2>
                <p>Your record has been successfully registered with me. I'm thrilled to hear from you!</p>
                <p>I will get back to you as soon as possible to discuss your query or request.</p>
                <br>
                <p>Thanks and Regards,</p>
                <p>Himanshu Relhan</p>
              </div>
            </body>
            </html>
            `,
    });

    console.log("INFO of mail sent to user", mailThem);

    let mailMe = await transporter.sendMail({
      from: '"Himanshu Relhan" <himanshurelhan70@gmail.com>',
      to: "himanshurelhan70@gmail.com",
      subject: "A user filled the contact form",
      html: `
            <html>
            <head>
              <!-- Add any necessary meta tags or links to external stylesheets here -->
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6;">
              <h2 style="color: #007BFF;">Contact Form Submission</h2>
              <p><strong>Name:</strong> ${doc.name}</p>
              <p><strong>Email:</strong> ${doc.email}</p>
              <p><strong>Phone:</strong> ${doc.phone}</p>
              <p><strong>Message:</strong></p>
              <p style="background-color: #F7F7F7; padding: 10px;">${doc.message}</p>
            </body>
          </html>
            `,
    });

    console.log("INFO of mail to your another mail", mailMe);
  } catch (error) {
    console.error(error);
  }
});

module.exports = mongoose.model("User", userSchema);
