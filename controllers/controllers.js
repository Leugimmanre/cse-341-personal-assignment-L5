const Profile = require('../models/profile.js');

// Get all contacts
const students = async (request, response) => {

    const data = await Profile.find({});
    response.send(data);

}

// Get a single contact
const singleStudent = async (request, response) => {
    const id = request.params['id'];

    const data = await Contacts.findOne({_id:id});
    response.send(data);

}

// Create contact
const createStudent = async (request, response) => {
    const { firstName, lastName, email, age, phone, address, degree, university } = request.body;

    try {
        const contact = new Profile( {
            firstName,
            lastName,
            age,
            phone,
            email,
            address,
            degree,
            university,
        });
        await contact.save();
        return response.status(201).json(contact.id);

    } catch (error) {
        console.log(error);
    }
}

// Update contact
const updateStudent = async (request, response) => {
    const { firstName, lastName, email, age, phone, address, degree, university } = request.body;
    const id = request.params["id"];

    const data = await Contacts.findOne({_id:id});

    if (data) {
        try {
            await Contacts.replaceOne({_id:data.id}, {
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

// Delete contact
const deleteStudent = async (request, response) => {
    const id = request.params['id'];
    await Contacts.findOneAndDelete({ _id: id })
    .then(deletedContact => {
      if (!deletedContact) {
        return response.status(404).json({ error: 'Contact not found' });
      }
      response.status(200).json({ message: 'Contact deleted successfully' });
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
