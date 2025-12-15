import express from "express";
import { INCOMING_LIMIT } from "./constants.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./middlewares/globalErrorHandler.middleware.js";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: INCOMING_LIMIT }));
app.use(express.urlencoded({ extended: true, limit: INCOMING_LIMIT }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js"



//router declaration
app.use("/api/v1/users",userRouter)
app.use(globalErrorHandler);

export { app };
