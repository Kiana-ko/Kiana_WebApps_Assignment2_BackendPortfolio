
// Responsible for requiring Express and creating a new router instance:
var express = require('express');
var router = express.Router();


// Responsible for requiring the users controller to handle CRUD operations:
let usersController = require('../controllers/user');


/*
== Responsible for defining routes for CRUD operations on users, such as: ==
- Getting all users
- Creating a new user
- Getting a user by ID 
- Updating a user by ID
- Deleting a user by ID
*/

router.get('/', usersController.getAll);
router.post('/', usersController.createUser);
router.get('/:id', usersController.userByID);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.remove);

// === == == == == == ==  == == == == == == == == == == == == == ==  == === 


// Responsible for exporting the router for use in other parts of the app
module.exports = router;