import express from "express";
import morgan from "morgan";
import connectDB from "./db/db.js";

const app = express();

connectDB();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  console.log(ip);
  res.send(`Your IP address is ${ip}`);
});

export default app;
