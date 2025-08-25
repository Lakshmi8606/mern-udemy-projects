import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

// load .env file
dotenv.config({ path: "./.env" });

// debug
console.log("Mongo URI:", process.env.MONGO_URI);

const app = express();
app.use(express.json()); //allows us to accept json data in the body
app.use("/api/products", productRoutes);
app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
