import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/envs";

export const jwtToken = (email: string, role: string) => {
  return jwt.sign(
    { email, role}, 
    JWT_SECRET!,
    { expiresIn: "1h" }
  );
};