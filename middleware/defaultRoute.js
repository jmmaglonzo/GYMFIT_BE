const defaultRoute = (req, res, next) => {
  res.status(404).json({
    status: false,
    message: `Can't find ${req.originalUrl} on the server!`,
  });
  next();
};

export default defaultRoute;
