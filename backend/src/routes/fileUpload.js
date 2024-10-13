const express = require('express');
const uploadFileController = require('../controllers/uploadController');
const router = express.Router();

// upload a new file
router.post('/', uploadFileController.uploadFile);

module.exports = router;