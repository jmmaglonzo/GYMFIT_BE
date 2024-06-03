import Workout from "../model/workoutModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import ErrorResponse from "../utils/errorResponse.js";

export const getAllWorkout = asyncHandler(async (req, res, next) => {
  const workouts = await Workout.find().sort({ createdAt: 1 });

  if (workouts.length === 0) {
    res.status(404).json({
      success: false,
      error: "No data found",
    });
  }

  res.status(200).json(workouts);
});

export const getWorkout = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const workout = await Workout.findById(id);

  if (!workout) {
    return next(new ErrorResponse(`No such workout with an ID of ${id}`, 404));
  }

  res.status(200).json(workout);
});

export const createWorkout = asyncHandler(async (req, res, next) => {
  const { title, load, reps } = req.body;

  if (!title || !load || !reps) {
    return next(
      new ErrorResponse(
        "Please provide all required fields: title, load, and reps",
        400
      )
    );
  }

  const workout = await Workout.create({ title, load, reps });
  res.status(201).json(workout);
});

export const updateWorkout = asyncHandler(async (req, res, next) => {
  const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!workout) {
    return next(
      new ErrorResponse(`No such workout with an ID of ${req.params.id}`, 404)
    );
  }
  res.status(200).json(workout);
});

export const deleteWorkout = asyncHandler(async (req, res, next) => {
  const workout = await Workout.findByIdAndDelete(req.params.id);
  if (!workout) {
    return next(
      new ErrorResponse(`No such workout with an ID of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: null });
});
