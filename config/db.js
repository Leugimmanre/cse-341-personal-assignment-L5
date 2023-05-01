const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB running on port: ${process.env.PORT}`);

    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}
module.exports = connectDB;
