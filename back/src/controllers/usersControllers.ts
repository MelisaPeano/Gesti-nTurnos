import { NextFunction, Request, Response } from "express";
import { createUserService, getUserService, obtenerUserService } from "../services/usersServices";
import { User } from "../entities/user";
import { checkcredentials } from "../services/credentialsServices";
import sendEmail from "../utils/sendEmail";
import path from "path";
import { AppDataSource } from "../config/data-source";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, birthdate, nDni, password, repeatPassword, username } = req.body;
        if (!name || !email || !birthdate || !nDni || !username || !password || !repeatPassword) {
            return res.status(400).json("faltan datos")
        } else {

            const newUser: User = await createUserService({ name, email, birthdate, nDni, password, username });
            const sendUser = sendEmail(name, email, `Hola ${name} te damos la bienvenida a nuestro sistema de turnos. Tu usuario es: ${username}`);
            return res.status(201).json({ newUser, id: newUser.id });
        }
    } catch (error) {
        next(error)
    }


}

export const loginUser = async (req: Request, res: Response): Promise<Response | undefined> => {
    const { username, password } = req.body;
    const users = await checkcredentials(req.body);
    const obtenerUser = await obtenerUserService(users);
    if (obtenerUser) {
        const tdoBien = {
            login: true,
            user: {
                id: obtenerUser.id,
                name: obtenerUser.name,
                email: obtenerUser.email,
                birthdate: obtenerUser.birthdate,
                appointment: obtenerUser.appointment,
                nDni: obtenerUser.nDni
            }

        }
        return res.status(201).json({ tdoBien });
    };

}


export const getUser = async (req: Request, res: Response): Promise<Response | undefined> => {
    const users = await getUserService();
    return res.status(200).json(users);
}


export const detailsUser = async (req: Request, res: Response): Promise<Response | undefined> => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
        return res.status(404).json({ message: 'ID inválido' });
    }
    if (id) {
        const detail = await obtenerUserService(+id)
        return res.status(200).json({ detail });
    }
}


export const saveProfilePicture = async (req: Request, res: Response): Promise<Response | undefined>  => {
    const { id } = req.params;
    if (!req.file) {
        res.status(404).json("imagen no encontrada")
        return
    }
    const imagePath = path.join('/uploads', req.file.filename)
    const idUser = await obtenerUserService(+id)

    if (idUser) {
        idUser.profilePicturePath = imagePath;
        const uploadPicture = AppDataSource.getRepository(User)
        await uploadPicture.save(idUser)
        res.json({ profilePicturePath: imagePath });

    }
}