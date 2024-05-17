import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signupController = async (req, res) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    res.status(400).json({ maessage: "all fields are required" });
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.json("signup succesfull");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  // console.log(req.body);
};
