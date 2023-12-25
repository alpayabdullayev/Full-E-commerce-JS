import User from "../model/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
      const { username, password, email,role } = req.body;
  
      const userExist = await User.findOne({ username });
  
      if (userExist) {
        return res.status(400).json({ error: "Username already exists" });
      }
  
      const rounds = 12;
      const hashedPassword = await bcrypt.hash(password, rounds);
  
      const newUser = new User({
        username,
        password: hashedPassword,
        role,
        email
      });
  
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
    try {
      const { username, password, role,email } = req.body;
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(401).json({ error: "User not found" });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
        console.log(user.password);
        console.log(password);
      if (!passwordMatch) {
        return res.status(401).json({ error: "Incorrect password" });
      }
  
      const token = jwt.sign({ userId: user._id, role: role,email:email }, "secretKey", {
        expiresIn: "1h",
      });
  
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Login failed" });
    }
  };