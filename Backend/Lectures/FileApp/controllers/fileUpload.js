const File = require("../models/File");
const cloudinary = require("cloudinary").v2;


//localfileupload -> handler function
exports.localFileUpload = async (req, res) => {
    try {

        //fetch file from request
        const file = req.files.file;
        console.log("File received -> ", file);


        //create path where file need to be stored on server
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("PATH-> ", path)

        //add path to the move function
        file.mv(path , (err) => {
            console.log(err);
        });

        //create a successful response
        res.json({
            success:true,
            message:'Local File Uploaded Successfully',
        });

    }
    catch(error) {
        console.log("Not able to upload the file on server")
        console.log(error);
    }
}


function isFileTypeSupported(type, supportedTypes, fileSize) {
    // console.log(fileSize);
    // if(fileSize){
    //     console.log(fileSize);
    //     return fileSize / (1024*1024) <  5;
    // }

    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality) {
    const options = {folder};
    console.log("temp file path", file.tempFilePath);

    if(quality) {
        options.quality = quality;
    }

    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}


// imageUpload handler 
exports.imageUpload = async (req, res) => {
    try{
        //data fetch
        const { name, tags, email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile;
        console.log(file);

        //Validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("File Type:", fileType);

        if(!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success:false,
                message:'File format not supported',
            })
        }

        //file format is supported
        console.log("Uploading to Codehelp");
        const response = await uploadFileToCloudinary(file, "Codehelp");
        console.log(response);

        // Save entry in DB
        const fileData = await File.create({
            name,
            tags,
            email,
            url:response.secure_url,
        });

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'Image Successfully Uploaded',
        })
    }
    catch(error) {
        console.error(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong',
        });

    }
}


//videoUpload Handler 
exports.videoUpload = async (req,res) => {
    try{
        //data fetch
        const { name, tags, email} = req.body;
        console.log(name,tags,email);
        
        const file = req.files.videoFile;

         //Validation
         const supportedTypes = ["mp4", "mov"];
         const fileType = file.name.split('.')[1].toLowerCase();
         console.log("File Type:", fileType);
 
         //TODO: add a upper limit of 5MB for Video
         if(!isFileTypeSupported(fileType, supportedTypes)) {
             return res.status(400).json({
                 success:false,
                 message:'File format not supported',
             })
         }

        //file format supported
        console.log("Uploading to Codehelp");

        const response = await uploadFileToCloudinary(file, "Codehelp");
        console.log(response);

        //Saving Entry in DB
        const fileData = await File.create({
            name,
            tags,
            email,
            url:response.secure_url,
        });

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'Video Successfully Uploaded',
        })

    }
    catch(error) {
        console.error(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong',
        })
    }
}


//imageSizeReducer handler
exports.imageSizeReducer = async (req,res) => {
    try{
        //data fetch
        const { name, tags, email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile;
        console.log(file);

        //Validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("File Type:", fileType);

        const fileSize = file.size;

        //add a upper limit of 5MB for image
        if(!isFileTypeSupported(fileType, supportedTypes, fileSize)) {
            // return res.status(400).json({
            //     success:false,
            //     message:'File format not supported',
            // })
        }

        //file format supported
        console.log("Uploading to Codehelp");

        //height attribute-> COMPRESS options = {width: 800, height: 600}
        const response = await uploadFileToCloudinary(file, "Codehelp", 80);
        console.log(response);

        // Saving Entry in DB
        const fileData = await File.create({
            name,
            tags,
            email,
            url:response.secure_url,
        });

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'Image Successfully Uploaded',
        })
    }
    catch(error) {
        console.error(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong',
        })
    }
}