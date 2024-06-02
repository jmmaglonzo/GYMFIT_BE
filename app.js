import express from "express";
import morgan from "morgan";
import workoutRoutes from "./routes/workoutRouter.js";
import errorHandler from "./middleware/errorHandler.js";
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/api/workouts", workoutRoutes);
app.use(errorHandler);
export default app;
