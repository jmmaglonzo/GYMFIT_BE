import express from "express";
import morgan from "morgan";
import workoutRoutes from "./routes/workoutRouter.js";
import userRoutes from "./routes/useRoute.js";
import errorHandler from "./middleware/errorHandler.js";
import defaultRoute from "./middleware/defaultRoute.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);
app.all("*", defaultRoute);
app.use(errorHandler);
export default app;
