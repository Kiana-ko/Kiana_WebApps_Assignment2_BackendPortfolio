var express = require('express');
var router = express.Router();

let contactController = require('../controllers/contact');


router.get('/', contactController.getAll);
router.post('/', contactController.createContact);
router.get('/:id', contactController.contactByID);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.remove);

module.exports = router;