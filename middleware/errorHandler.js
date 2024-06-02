import ErrorResponse from "../utils/errorResponse.js";

const errorHandler = (err, req, res, next) => {
  let error = { ...err, message: err.message };

  // CastError: invalid object ID
  if (err.name === "CastError") {
    const message = `Could not find resource with an ID of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // ValidationError: validation failed
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
    error = new ErrorResponse(message, 400);
  }

  // Duplicate key error
  if (err.code === 11000) {
    const message = "Duplicated Field Value Entered";
    error = new ErrorResponse(message, 400);
  }

  // Log the original error (optional)
  console.error(err);

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Internal Server Error",
  });
};

export default errorHandler;
