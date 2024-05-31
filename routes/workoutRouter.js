import express from "express";
import {
  getAllWorkout,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controller/workoutController.js";
const router = express.Router();

router.route("/").get(getAllWorkout).post(createWorkout);
router.route("/:id").get(getWorkout).patch(updateWorkout).delete(deleteWorkout);

export default router;
