import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectToDB() {
  try {
    const con = await mongoose.connect(
      `${process.env.MONGO_URI_PROD}/${DB_NAME}`
    );
    console.log("Connected to Database host:", con.connection.host);
  } catch (error) {
    console.log("Failed to conncet mongoddb ", error);
    process.exit(1);
  }
}
export default connectToDB;
