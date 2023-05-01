const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    age: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    address: {
        type: String
    },
    degree: {
        type: String
    },
    university: {
        type: String
    },
});

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;