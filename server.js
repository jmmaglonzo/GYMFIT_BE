import { connect } from "mongoose";
import app from "./app.js";

const PORT = process.env.PORT;
const DB = process.env.URI;
const connectDB = async () => {
  try {
    await connect(DB);
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

connectDB();
