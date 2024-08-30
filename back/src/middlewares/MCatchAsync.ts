import { Request, Response, NextFunction } from "express";

export const MCatchAsync =((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({
        status: 'error',
        message: err.message
    });
});