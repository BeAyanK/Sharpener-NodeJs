

const express = require('express');

const prodController = require('../controllers/products');

const router = express.Router();

router.get('/', prodController.getAllProducts);

module.exports = router;
