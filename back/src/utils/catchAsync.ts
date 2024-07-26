import { error } from "console";
import { NextFunction, Request, Response } from "express";

type TController = (req: Request, res: Response, next:NextFunction) => Promise<void>;

export const catchAsync = (fn: TController) => {
    return (req: Request, res: Response, next:NextFunction) => {
        fn(req, res, next).catch((error) => {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message })
            } else {
                next(error);
            }
        })
    } 
}

export const catchAsync404 = (fn: TController) => {
    return (req: Request, res: Response, next:NextFunction) => {
        fn(req, res, next).catch((error) => {
            if (error instanceof Error) {
                res.status(404).json({ error: error.message })
            } else {
                next(error);
            }
        })
    } 
}


    