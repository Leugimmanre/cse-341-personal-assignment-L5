const mongoose = require('mongoose');
const db = process.env.MONGO_URI;

mongoose.set('strictQuery', false);


const connectDB = async() => {

    try {
        await mongoose.connect(db);
        console.log('Conectado con base de datos');
    } catch (error) {
        console.log(error);
        throw new Error('Error conexión base de datos');
    }
}




// const mongoose = require("mongoose");
// const dotenv = require('dotenv');

// dotenv.config();

// const connectDB = async () => {
//     try {
//         const db = await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });

//         console.log(`MongoDB running on port: ${process.env.PORT2}`);
//     } catch (error) {
//         console.log(`error: ${error.message}`);
//         process.exit(1);
//     }
// }


module.exports = connectDB;