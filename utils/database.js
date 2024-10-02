import mongoose from "mongoose";
// MongoDB connection logic
let isConnected = false;
export const connectToDb = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/promptia");
        console.log("Connection established successfully");
        isConnected = true;
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};
