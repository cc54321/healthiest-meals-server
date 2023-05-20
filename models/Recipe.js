const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  instructions: {
    type: [String],
    required: true
  },
  image: {
    type: String
  },
  source: {
    type: String
  },
  totalTime: {
    type: Number
  },
  servings: {
    type: Number
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;