let UserModel = require('../models/user');

module.exports.createUser = async function (req, res, next) {
    try {
        let newUser = new UserModel(req.body);

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

module.exports.getAll = async function (req, res, next) {
    try {
        let list = await UserModel.find().select('-password');
        res.json(list);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

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

module.exports.updateUser = async function (req, res, next) {
    try {
        let id = req.params.id;

        let updateUser = new UserModel(req.body);
        updateUser._id = id;

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

module.exports.remove = async function (req, res, next) {
    try {
        let id = req.params.id;

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