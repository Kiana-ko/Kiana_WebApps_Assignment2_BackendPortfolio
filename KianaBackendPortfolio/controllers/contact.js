let ContactModel = require('../models/contact');

module.exports.createContact = async function (req, res, next) {
    try {
        let newContact = new ContactModel(req.body);

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

module.exports.getAll = async function (req, res, next) {
    try {
        let list = await ContactModel.find();
        res.json(list);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

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

module.exports.updateContact = async function (req, res, next) {
    try {
        let id = req.params.id;

        let updateContact = new ContactModel(req.body);
        updateContact._id = id;

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

module.exports.remove = async function (req, res, next) {
    try {
        let id = req.params.id;

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