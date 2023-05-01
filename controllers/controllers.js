const Profile = require('../models/profile.js');

// Get all Profiles
const students = async (request, response) => {

    const data = await Profile.find({});
    response.send(data);

}

// Get a single profile
const singleStudent = async (request, response) => {
    const id = request.params['id'];

    const data = await Profile.findOne({_id:id});
    response.send(data);

}

// Create profile
const createStudent = async (request, response) => {
    const { firstName, lastName, email, age, phone, address, degree, university } = request.body;

    try {
        const profile = new Profile( {
            firstName,
            lastName,
            age,
            phone,
            email,
            address,
            degree,
            university,
        });
        await profile.save();
        return response.status(201).json(profile.id);

    } catch (error) {
        console.log(error);
    }
}

// Update profile
const updateStudent = async (request, response) => {
    const { firstName, lastName, email, age, phone, address, degree, university } = request.body;
    const id = request.params["id"];

    const data = await Profile.findOne({_id:id});

    if (data) {
        try {
            await Profile.replaceOne({_id:data.id}, {
                firstName,
                lastName,
                age,
                phone,
                email,
                address,
                degree,
                university,
            });
            return response.status(204).json(data);

        } catch (error) {
            console.log(error);
        }

    }

}

// Delete profile
const deleteStudent = async (request, response) => {
    const id = request.params['id'];
    await Profile.findOneAndDelete({ _id: id })
    .then(deletedprofile => {
      if (!deletedprofile) {
        return response.status(404).json({ error: 'profile not found' });
      }
      response.status(200).json({ message: 'profile deleted successfully' });
    })
    .catch(error => {
        response.status(500).json({ error: error.message });
    });
}

module.exports = {
    students,
    singleStudent,
    createStudent,
    updateStudent,
    deleteStudent
};
