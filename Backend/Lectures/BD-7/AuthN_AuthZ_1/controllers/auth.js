const bcrypt = require("bcrypt");
const User = require("../models/User");

// signup route handler
exports.signUp = async (req, res) => {
    try{
        //get data from req
        const {name, email, password, role} = req.body;

        // if user already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success: true,
                message: "Email is already registered"
            })
        }

        // secure password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10)
        }
        catch(err){
            return res.status(500).json({
                success: false,
                message: "Error in hashing password"
            })
        }

        // create entry for user
        const createdUser = await User.create({
            name, email, password:hashedPassword, role
        });

        return res.status(200).json({
            success: true,
            message: "User created successfully"
        })
        
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "user cannnot be registered, please try again later"
        })
    }
}