import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("...")
        console.log("✅ MongoDB Connected !!!");
    } catch (error) {
        console.log("❌ MongoDB Connection Failed : ", error.message);
        process.exit(1); // it terminate the code
    }
}
