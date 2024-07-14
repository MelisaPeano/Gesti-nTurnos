import IUsers  from "../interfaces/IUsers";
import { createUserService, getUserService, deleteUserService } from "../services/usersServices";
import { Request, Response } from "express";


export const createUser = async (req: Request, res: Response) => {
    const { name, email, active} = req.body;
    const newUser: IUsers = await createUserService({ name, email, active})
    res.status(201).json(newUser)
}

export const getUser = async (req: Request, res: Response) => {
    const users: IUsers[] = await getUserService();
    res.status(200).json(users)

}

export const deleteUser = async (req: Request, res:Response) => {
    const { id } = req.body;
    await deleteUserService(id)
    res.status(200).json({message: "eliminado correctamente"})

}
