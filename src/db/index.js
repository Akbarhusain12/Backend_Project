import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        const connectionInstant = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB Host:${connectionInstant.connection.host}`);
    } catch (error) {
        console.log("MongoDB Connection FAILED", error);
        process.exit(1)
    }
}

export default connectDB