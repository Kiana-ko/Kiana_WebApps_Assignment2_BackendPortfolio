
// Responsible for importing the User model:
let UserModel = require('../models/user');

// Responsible for creating a new user in the database:
module.exports.createUser = async function (req, res, next) {
    try {
        let newUser = new UserModel(req.body);

        // Responsible for saving the new user into the database:
        let result = await UserModel.create(newUser);
        res.json(
            {
                success: true,
                message: 'User created successfully.'
            }
        )
    } catch (error) {
        console.log(error);
        next(error);
    }
}

// Responsible for retrieving all the users from the database, excluding passwords:
module.exports.getAll = async function (req, res, next) {
    try {
        let list = await UserModel.find().select('-password');
        res.json(list);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

// Responsible for retrieving a single user by ID, excluding the password:
module.exports.userByID = async function (req, res, next) {
    try {
        let id = req.params.id;
        let user = await UserModel.findById(id).select('-password');
        res.json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

// Responsible for updating an existing user by ID:
module.exports.updateUser = async function (req, res, next) {
    try {
        let id = req.params.id;

        let updateUser = new UserModel(req.body);
        updateUser._id = id;

        // Responsible for updating the user in the database:
        let result = await UserModel.updateOne({ _id: id }, updateUser);

        if (result.modifiedCount > 0) {
            res.json(
                {
                    success: true,
                    message: 'User updated successfully.'
                }
            );
        } else {
            throw new Error('User not updated. Are you sure it exists?')
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}

// Responsible for removing a user based on their ID:
module.exports.remove = async function (req, res, next) {
    try {
        let id = req.params.id;

        // Responsible for deleting the user from the database:
        let result = await UserModel.findByIdAndDelete(id);
        if (result) {
            return res.status(404).json(
                {
                    success: true,
                    message: 'User deleted successfully.'
                }
            );
        } else {
            throw new Error('User not deleted. Are you sure it exists?')
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}