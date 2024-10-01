import mongoose from "mongoose";
let isConnected = false;
export const connectToDb = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log("Mongo Db is already connected");
        return;
    }
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/promptia")
            .then(() => console.log("Connection Eastablish Successfully"))
            .catch((e) => console.log("No Connection", e))

        isConnected = true
    } catch (error) {
        console.log("error======", error)
    }
}