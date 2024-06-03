import express from "express";
import {
  getAllWorkout,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controller/workoutController.js";
// import requireAuth from "../middleware/requireAuth.js";
const router = express.Router();

// router.use(requireAuth);

router.route("/").get(getAllWorkout).post(createWorkout);
router.route("/:id").get(getWorkout).patch(updateWorkout).delete(deleteWorkout);

export default router;
