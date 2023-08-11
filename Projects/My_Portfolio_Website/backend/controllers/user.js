const User = require("../models/User");

exports.welcome = (req, res) => {
    console.log("welcome to homepage");
    res.status(200).json({
        status: "Success",
        message: "Welcome to Home page"
    });
}

exports.createUser = async (req, res) => {
   try{
    const { name, email, phone, message } = req.body;
    // console.log(name, email, phone, message);

    const createdUser = await User.create({
        name,
        email,
        phone,
        message
    });

    console.log("user created successfully");

    res.status(200).json({
        status: "Success",
        message: "user created successfully",
        data: createdUser
    })

   }
   catch(err){
    console.log("error while creating user");
    res.status(500).json({
        status: "Error",
        message: "error while creating user"
    });
   }
}