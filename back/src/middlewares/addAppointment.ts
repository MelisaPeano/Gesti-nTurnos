import { Request, Response, NextFunction  } from "express";


export const addAppointment = async (req: Request, res: Response, next: NextFunction) => {
    const { date, time, userId } = req.body;
    if(!date || !time || !userId) {
        res.status(400).json({ error: "missing data" });
        return;
    }   
    next();
}
