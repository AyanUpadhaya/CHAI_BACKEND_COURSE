import connectToDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config();
import { app } from "./app.js";

//when async func executes returns a promise
connectToDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running 💻 on port:${process.env.PORT}`);
    });
    app.on("error",(error)=>console.log(`App error !!!: ${error}`))
  })
  .catch((error) => console.log(error));
