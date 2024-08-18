import mongoose from "mongoose";
import connectDB from "./src/DB/database.js";
import dotenv from "dotenv";
import { app } from "./src/app.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>
    {
        app.listen(process.env.PORT || 8000), () =>{
        {
            console.log("SERVER IS RUNNING :)");
        }
    }})
.catch
(
    (error) =>
    {
        console.log("MONGO DB ERROR FAIL!!");
    }
)