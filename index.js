import mongoose from "mongoose";
import connectDB from "./src/DB/database.js";
import dotenv from "dotenv";

dotenv.config({
    path: './env'
})

connectDB();