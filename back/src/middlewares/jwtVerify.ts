import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";  

interface CustomJwtPayload extends JwtPayload {
  email: string;
}


export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  const cleanToken = token.split(" ")[1];
  try {
    const decoded  = jwt.verify(cleanToken, process.env.JWT_SECRET!) as JwtPayload | string;
    if (typeof decoded !== "string" && (decoded as CustomJwtPayload).email) {
      const { email , role } = decoded as CustomJwtPayload;
      console.log("Usuario autenticado con email:", email);

      req.body.email = email;
      req.body.role = role;
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
  const { role } = req.body;
  if (role !== "admin") {
    return res.status(401).json({ message: "No autorizado" });
  }
  next();
};

export const verifyEmployee = (req: Request, res: Response, next: NextFunction) => {
  const { role } = req.body;
  if (role !== "employee") {
    return res.status(401).json({ message: "No autorizado" });
  }
  next();
};
