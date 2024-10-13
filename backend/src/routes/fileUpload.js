const express = require('express');
const uploadFileController = require('../controllers/uploadController');
const router = express.Router();

// Temporary GET route for testing the endpoint
router.get('/', (req, res) => {
    res.send('File Upload route is working');
});

// POST route for handling file uploads
router.post('/', uploadFileController.uploadFile);

module.exports = router;
