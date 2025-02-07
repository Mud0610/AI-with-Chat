import dotenv from "dotenv";
import http from "http";
import app from "./app.js";
import connectDB from "./db/db.js";

dotenv.config({ path: "./.env" });

const port = process.env.PORT || 3000;

const server = http.createServer(app);

connectDB()
  .then(async () => {
    await server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error in Server", error);
  });
