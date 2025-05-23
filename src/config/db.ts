import mongoose from "mongoose";

const connectDb = async()=>{
   return mongoose.connect(process.env.DB_URI as string)
}

export default connectDb;