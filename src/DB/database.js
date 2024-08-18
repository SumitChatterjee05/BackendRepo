import mongoose from "mongoose";
import { DB_name } from "../constants.js";

const connectDB=async()=>
{
    try
    {
        const connection = await mongoose.connect(`${process.env.MongoDbURL}/${DB_name}`)
        console.log("DATABSE CONNECTED");
    }
    catch(error)
    {
        console.log("ERROR", error);
        process.exit(1);
    }
}

export default connectDB;

//Whenever we try to talk to database then we have to always keep 2 things in mind that data base is always in different continetn so always use async-await. Secondly to catch errors always use try catch. 
// Since we have to do this everytime so create an utility for this caleed asyncHandler.