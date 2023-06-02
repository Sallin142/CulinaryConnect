import express from "express"
import cors from  "cors"
import mongoose from "mongoose"
import {recipeRouter} from "./routes/recipes.js";
import path from "path";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/recipes", recipeRouter);

//create environment variable
mongoose.connect("mongodb+srv://sallinKoutev:Nillas2468@recipe-app.cff9zjm.mongodb.net/Recipe-app?retryWrites=true&w=majority")

// Serve static files from the React app
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '372-asn-1/client/build')));

// The catchall handler: for any request that doesn't match one above, 
// send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/372-asn-1/client/build/index.html'));
});

app.listen(3001, () => console.log("server start"));
