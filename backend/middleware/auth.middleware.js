import jwt from "jsonwebtoken";
import redisClient from "../services/redis.service.js";

export const authUser = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Unauthorized User" });
    }

    const blackListedToken = await redisClient.get(token);

    if (blackListedToken) {
      res.cookie("token", "");
      return res.status(401).json({ error: "Unauthorized User" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("Error auth:", error);
    res.status(401).json({ error: "Unauthorized User" });
  }
};
