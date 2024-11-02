var express = require('express');
var router = express.Router();

let usersController = require('../controllers/user');


router.get('/', usersController.getAll);
router.post('/', usersController.createUser);
router.get('/:id', usersController.userByID);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.remove);

module.exports = router;