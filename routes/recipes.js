const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');

// Define your recipe routes
router.get('/', recipesController.getAllRecipes);


module.exports = router;