import express from "express"
import cors from  "cors"
import mongoose from "mongoose"
import {recipeRouter} from "./routes/recipes.js";


const app = express();
app.use(express.json());
app.use(cors());
app.use("/recipes", recipeRouter);

//create enviroment variable
mongoose.connect("mongodb+srv://sallinKoutev:Nillas2468@recipe-app.cff9zjm.mongodb.net/Recipe-app?retryWrites=true&w=majority")

app.listen(3001, () => console.log("server start"));