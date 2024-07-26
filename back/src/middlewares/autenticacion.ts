import { Response, Request, NextFunction } from "express";

export const autenticacion = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    if(!username && !password) {
        res.status(400).json({ error: "missing credentials" });
        return;
    }
    next();
}