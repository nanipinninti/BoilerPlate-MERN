import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User, { IUser } from "../../../models/User";
import { generateToken } from "../../../utils/authUtils";

export const Signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "Fill all the fields!" });
      return;
    }

    const exist_user: IUser | null = await User.findOne({ email });
    if (exist_user) {
      res.status(409).json({ message: "Email already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user: IUser = new User({
      email,
      password: hashedPassword,
    });

    await user.save();
    const user_id: string = user._id.toString();
    const token = generateToken(res, user_id);

    res.status(201).json({ message: "Signup successful", token });
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Couldn't complete your request" });
  }
};

export const Login = async (req: Request, res: Response): Promise<void> => {
    try {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ message: "Fill all the fields!" });
        return;
    }

    const user: IUser | null = await User.findOne({ email });
    if (!user) {
        res.status(400).json({ message: "Email is not registered" });
        return;
    }

    const isMatch: boolean = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        res.status(401).json({ message: "Incorrect Password" });
        return;
    }

    const token = generateToken(res, user._id.toString());

    res.status(200).json({ message: "Login successful", token });
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Couldn't complete your request" });
    }
};

export const Logout = async (req: Request, res: Response): Promise<void> => {
    try {
        res.clearCookie("auth_token", {
            httpOnly: true,
            sameSite: "none",
            secure: true,
        });

        res.status(200).json({ message: "Logout successful" });
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Couldn't complete your request" });
    }
};