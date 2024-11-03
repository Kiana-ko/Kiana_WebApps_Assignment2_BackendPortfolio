
// Responsible for requiring Express and creating a new router instance:
var express = require('express');
var router = express.Router();


// Responsible for requiring the contact controller to handle CRUD operations:
let contactController = require('../controllers/contact');


/*

== Responsible for defining routes for CRUD operations on contacts, such as: ==
- Getting all the contacts
- Creating a new contact
- Getting a contact by ID 
- Updating a contact by ID
- And Deleting a contact by ID

*/

router.get('/', contactController.getAll);
router.post('/', contactController.createContact);
router.get('/:id', contactController.contactByID);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.remove);

// ===  == == == == == ==  == == == == == == == == == == == == == ==  ==  === 


// Responsible for exporting the router for use in other parts of the app:
module.exports = router;