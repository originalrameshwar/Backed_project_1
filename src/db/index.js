import mongoose from "mongoose";
import { MONGO_URL } from "";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${MONGO_URL}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export { connectDB };