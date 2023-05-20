const Recipe = require('../models/Recipe');


// Example: fetch all recipes
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
};

module.exports = {
  getAllRecipes,

};