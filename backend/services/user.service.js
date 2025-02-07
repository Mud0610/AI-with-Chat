import userModel from "../models/user.model.js";

export const createUser = async ({ username, email, password }) => {
  if (!username || !email || !password) {
    throw new Error("Username, Email and Password are required");
  }

  const hashedPassword = await userModel.hashPassword(password);

  const user = await userModel.create({
    username,
    email,
    password: hashedPassword,
  });

  return user;
};
