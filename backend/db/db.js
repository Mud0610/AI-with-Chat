import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js";

const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI.replace(/\/[^/]+(\?.*)?$/, ""); // Remove the last part of the URI
    const connectionInstance = await mongoose.connect(
      `${MONGO_URI}/${DB_NAME}`
    );
    console.log("MongoDB connected: ", connectionInstance.connection.host);
  } catch (error) {
    console.error("MongoDB connection Error", error);
    process.exit(1);
  }
};

export default connectDB;
