import { Request, Response, NextFunction } from "express";

const autenticacionAppointment = (req: Request, res: Response, next: NextFunction) => {
    const {date, time, userId} = req.body;
        if (!date || !time || ! userId) {
        res.status(400).json({ message: "Faltan datos" });
        return;
         }

     next()
   
}

export default autenticacionAppointment;