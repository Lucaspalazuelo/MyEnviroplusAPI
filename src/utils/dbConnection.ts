import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnection = () => {
    mongoose.set("strictQuery", true);

    const url: string = process.env.MONGODB_URI || "";

    mongoose.connect(url);

    mongoose.connection.on("connected", () => {
        console.log("Connexion successfull to MongoDB");
    });

    mongoose.connection.on("error", (err) => {
        console.error("Connexion to MongoDB failed", err);
    });
};

export default dbConnection;
