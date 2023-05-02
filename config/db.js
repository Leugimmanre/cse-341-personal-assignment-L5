const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const urlURI = process.env.MONGO_URI;
const urlPORT = process.env.PORT2;

const connectDB = async () => {
    try {
        const db = await mongoose.connect(urlURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB running on port: ${urlPORT}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}


module.exports = connectDB;