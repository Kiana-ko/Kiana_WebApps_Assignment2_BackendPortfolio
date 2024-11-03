
// Responsible for importing the Contact model:
let ContactModel = require('../models/contact');

// Responsible for creating a new contact in the database:
module.exports.createContact = async function (req, res, next) {
    try {
        let newContact = new ContactModel(req.body);

         // Responsible for saving the new contact to the database:
        let result = await ContactModel.create(newContact);
        res.json(
            {
                success: true,
                message: 'Contact created successfully.'
            }
        )
    } catch (error) {
        console.log(error);
        next(error);
    }
}

// Responsible for retrieving all the contacts from the database:
module.exports.getAll = async function (req, res, next) {
    try {
        let list = await ContactModel.find();
        res.json(list);
    } catch (error) {
        console.log(error);
        next(error);
    }
}


// Responsible for retrieving a single contact by their ID:
module.exports.contactByID = async function (req, res, next) {
    try {
        let id = req.params.id;
        let contact = await ContactModel.findById(id);
        res.json(contact);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

// Responsible for updating an existing contact by their ID:
module.exports.updateContact = async function (req, res, next) {
    try {
        let id = req.params.id;

        let updateContact = new ContactModel(req.body);
        updateContact._id = id;

        // Responsible for updating the contact in the database:
        let result = await ContactModel.updateOne({ _id: id }, updateContact);

        if (result.modifiedCount > 0) {
            res.json(
                {
                    success: true,
                    message: 'Contact updated successfully.'
                }
            );
        } else {
            throw new Error('Contact not updated. Are you sure it exists?')
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}


// Responsible for removing a contact by their ID:
module.exports.remove = async function (req, res, next) {
    try {
        let id = req.params.id;

        // Responsible for deleting the contact from the database:
        let result = await ContactModel.findByIdAndDelete(id);
        if (result) {
            return res.status(404).json(
                {
                    success: true,
                    message: 'Contact deleted successfully.'
                }
            );
        } else {
            throw new Error('Contact not deleted. Are you sure it exists?')
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}