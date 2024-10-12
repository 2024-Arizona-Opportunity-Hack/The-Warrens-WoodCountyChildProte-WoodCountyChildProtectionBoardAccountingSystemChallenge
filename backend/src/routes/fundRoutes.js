const express = require('express');
const fundController = require('../controllers/fundController');
const router = express.Router();

// User Routes
router.get('/', (req, res) => {
    const grants = [
      { id: 1, name: 'Grant A', amount: 1000 },
      { id: 2, name: 'Grant B', amount: 5000 }
    ];
    res.json(grants);
  });

module.exports = router;