import express from "express";
import mongoose from "mongoose";
import { RecipesModel } from "../models/Recipe.js";
const router = express.Router();

// get all recipes
router.get("/", async(req, res) => {
    try {
        const response = await RecipesModel.find({});
        res.json(response);
    } catch(error) {
        console.error(error);
    }
});

//creating a recipe
router.post("/", async (req, res) => {
    const recipe = new RecipesModel({
        ...req.body
    });
    try {
        await recipe.save();
    } catch(error) {
        console.log(error);
    }
});

// delete a recipe
router.delete("/:id", async (req, res) => {
    try {
        await RecipesModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Recipe deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Unable to delete recipe" });
    }
});

export {router as recipeRouter};