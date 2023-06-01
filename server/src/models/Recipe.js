import mongoose from "mongoose";

const RecipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  ingredients: [
    {
      type: String,
      required: false,
    },
  ],
  instructions: {
    type: String,
    required: false,
  },

  imageUrl: {
    type: String,
    required: false,
  },

});

export const RecipesModel = mongoose.model("Recipes", RecipeSchema);