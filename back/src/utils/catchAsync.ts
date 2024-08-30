// Prácticando funciones de orden superior ;)
import { Request, Response, NextFunction } from "express";

type TController = (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>;

export const catchAsync = (controller: TController) => {
    return (req:Request, res:Response, next:NextFunction) => {
        controller(req, res, next).catch((err) => {
            if(err instanceof Error ){
                res.status(400).json({
                    status: 'fail',
                    message: err.message
                });
            } else {
               return next(err);
            }
        });
    };
}
export const catchAsync404 = (controller: TController) => {
    return (req:Request, res:Response, next:NextFunction) => {
        controller(req, res, next).catch((err) => {
            if(err instanceof Error ){
                res.status(404).json({
                    status: 'fail',
                    message: err.message
                });
            } else {
                return next(err);
            }
        });
    };
}