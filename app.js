import express from "express";
import morgan from "morgan";
import workoutRoutes from "./routes/workoutRouter.js";
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/api/workout", workoutRoutes);
export default app;
