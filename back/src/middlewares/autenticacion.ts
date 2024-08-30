import { Response, NextFunction, Request } from "express";

export const autenticacion = (req: Request, res: Response, next: NextFunction) => {
    const { username , password, email, repeatPassword } = req.body;
    if(!username && !password) {
       return res.status(400).json({message: "error, faltan datos para el registro"})
    }
    if(password !== repeatPassword) {
        return res.status(400).json({message: "error, las contraseñas no coinciden"})
    }
    if (typeof username !== 'string' || typeof password !== 'string') {
        return res.status(400).json({message: "error, datos incorrectos"})
    } 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email || !emailRegex.test(email)) {
        return res.status(400).json({message: "error, datos incorrectos"})
    }
     next()
   
}

export const autenticacionLogin = (req: Request, res: Response, next: NextFunction) => {
    const { username , password } = req.body;
    if(!username && !password) {
       return res.status(400).json({message: "error, faltan datos para el registro"})
    }
    if (typeof username !== 'string' || typeof password !== 'string') {
        return res.status(400).json({message: "error, datos incorrectos"})
    } 
     next()
   
}