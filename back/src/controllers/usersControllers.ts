import { User } from "../entities/user";
import { createUserService, getUserService, deleteUserService, obtenerUserService } from "../services/usersServices";
import { Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import { checkCredentials} from "../services/credentialsServices";


export const createUser = async (req: Request, res: Response) => {
    const { name, email, birthdate, dni, password , username, vehicls} = req.body;
    if(!name || !email || !birthdate || !dni || !password || !username) {
        res.status(400).json({ error: "todos los campos son obligatorios" });
        return;
    } else {
        const newUser: User = await createUserService({name, email, birthdate, dni, password, username, vehicls});
        res.status(201).json(newUser)
    }
}

export const loginUser = async (req: Request, res: Response) => {
    const {username, password} = req.body;
    const users = await checkCredentials(req.body);
    const obtenerUser = await obtenerUserService(users);
    if(obtenerUser) {
        const tdoBien = {
            login: true,
            user: {
                id: obtenerUser.id,
                name: obtenerUser.name,
                email: obtenerUser.email,
                birthdate: obtenerUser.birthdate,
                dni: obtenerUser.dni
            }
        }
        res.status(200).json(tdoBien)
        }
}

const getUser = async (req: Request, res: Response) => {
    const users = await getUserService();
    res.status(200).json(users)
}

const detailsUser = async (req: Request, res: Response) => {
    const id = (req.params.id, 10);
    if(isNaN(id)) {
        res.status(404).json({ error: "invalid id" });
    }
    if(id){
        const detail = await obtenerUserService(+id);
        res.status(200).json({detail})
    }
}

export const userControllers = {
    createUser:catchAsync(createUser),
    getUser:catchAsync(getUser),
}
export const deleteUser = async (req: Request, res:Response) => {
    const { id } = req.body;
    await deleteUserService(id)
    res.status(200).json({message: "eliminado correctamente"})

}
