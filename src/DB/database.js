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