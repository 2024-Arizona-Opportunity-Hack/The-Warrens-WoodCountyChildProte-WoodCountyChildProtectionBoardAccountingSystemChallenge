const express = require('express');
const fundController = require('../controllers/fundController');
const router = express.Router();

// User Routes
router.get('/', fundController.getFund);

// Insert a new fund
router.post('/', fundController.insertFund);

// Delete a fund by ID
router.delete('/:id', fundController.deleteFund);

module.exports = router;