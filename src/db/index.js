import mongoose  from "mongoose";
import { DB_NAME } from "../constants.js";

let connectDB =async()=>{
    try{
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`Mongo Connected ${connectionInstance.connection.host}`)
    }
    catch(err)
    {
        console.log("Mongo DB connection error:- ",err);
        throw err;
    }
}
export default connectDB;