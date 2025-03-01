import jwt from "jsonwebtoken";
import { Response, Request } from "express";

const generateToken = (res: Response, id: string): string => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET as string, { expiresIn: "3d" });
  res.cookie("auth_token", token, {
    httpOnly: true,
    sameSite: "none",
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  return token;
};

const verifyToken = (req: Request): any => {
  const token = req.cookies.auth_token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
  if (!token) throw new Error("No token provided");
  return jwt.verify(token, process.env.JWT_SECRET as string);
};

export { generateToken, verifyToken };