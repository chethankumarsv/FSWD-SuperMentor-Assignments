const express = require('express');
const router = express.Router();

const protect = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');

// Admin only
router.get('/admin', protect, authorize('admin'), (req, res) => {
    res.json({ message: "Welcome Admin" });
});

// User + Admin
router.get('/dashboard', protect, authorize('user', 'admin'), (req, res) => {
    res.json({ message: "Dashboard Access" });
});

module.exports = router;