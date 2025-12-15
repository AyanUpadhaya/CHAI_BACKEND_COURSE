// asyncHandler.js
const asyncHandler = (requestHandlerFunction) => {
  return (req, res, next) => {
    Promise.resolve(requestHandlerFunction(req, res, next)).catch((err) =>
      next(err)
    );
  };
};

// const asyncHandlerWithTryCatch = (requestHandlerFunction) => async (req, res, next) => {
//     try {
//       await requestHandlerFunction(req, res, next);
//     } catch (err) {
//       res
//         .status(500)
//         .json({ success: false, message: err.message || "Something broke!" });
//     }
//   };
// asyncHandlerWithTryCatch
export { asyncHandler };
