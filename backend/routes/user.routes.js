import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { body } from "express-validator";

const router = Router();

router.post(
  "/register",
  body("username")
    .isLength({ min: 4 })
    .withMessage("Username must be atleast 4 character")
    .isAlphanumeric()
    .withMessage("Username must only contain letters and numbers")
    .isLength({ max: 20 })
    .withMessage("Username must not exceed 20 characters")
    .trim()
    .escape(),
  body("email").isEmail().withMessage("Email must be valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must atleast 6 character long"),
  userController.createUserController
);

router.post(
  "/login",
  body("email").isEmail().withMessage("Email must be valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must atleast 6 character long"),
  userController.loginUserController
);

export default router;
