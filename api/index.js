import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connnected!");
  })
  .catch((err) => {
    console.log("error");
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("server is running on port 3000!");
});

// app.get('/test',(req, res) => {
//   res.send("HELLO MANDEM")
// })

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
