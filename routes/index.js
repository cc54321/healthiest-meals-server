
const express = require('express');
const router = express.Router();

// Define your root route
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
