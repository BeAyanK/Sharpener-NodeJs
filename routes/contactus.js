// const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

const contactController = require('../controllers/contact');

const router = express.Router();

router.get('/contactus', contactController.getContact);

router.post('/success', contactController.postContact)

module.exports = router;
