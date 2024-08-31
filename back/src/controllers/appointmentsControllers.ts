import { Request, Response } from "express";
import { appointmentsScheduleService, myAppointmentService, crearNewAppointmentService, changeStatusMyAppointmentService} from "../services/appointmentServices";
import IAppointmentDto from "../dto/IAppointmentDto";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user";
import sendEmail from "../utils/sendEmail";


export const getAppointments = async( req: Request, res: Response) => {
    const appointment = await appointmentsScheduleService();
    return res.status(200).json(appointment);
}

export const myAppointment = async(req: Request, res: Response) => {
   
    const { id } = req.params;
    const userId = parseInt(id, 10);

    if(isNaN(userId) || !userId) {
        console.log("id invalido")
        res.status(400). json({message: "id invlido"})
        return;
    }
    const myAppoint = await myAppointmentService(userId);
    return res.status(200).json(myAppoint);
}

enum status {
    ACTIVE = "active",
    CANCELLED = "cancelled"

}
export const addAppointment = async(req: Request, res: Response) => {

    const {date, time, userId, tipo, vehicleId} = req.body;
    
    const [year, month, day] = date.split('-').map(Number);
    
    const formattedDate = new Date(year, month - 1, day);

    if (isNaN(formattedDate.getTime())) {
        res.status(400).json({ message: "Fecha inválida" });
        return;
    }
     const [hours, minutes] = time.split(':').map(Number);
    
    if (isNaN(hours) || isNaN(minutes)) {
        res.status(400).json({ message: "Hora inválida" });
        return;
    }

    formattedDate.setHours(hours, minutes);

    if (!userId) {
     res.status(400).json({ message: "Usuario no encontrado" });
     return;
    }
    const userRepository = AppDataSource.getRepository(User);
    const foundUser = await userRepository.findOneBy({ id: userId });

    if (!foundUser) {
        res.status(400).json({ message: "Usuario no encontrado" });
        return;
    }

    const appointmentData: IAppointmentDto = {
        date: formattedDate,
        time: time, 
        status: status.ACTIVE,
        userId: userId
    };
    const newAppointment = await crearNewAppointmentService(appointmentData);
    const sendMenssage = sendEmail(foundUser.name, foundUser.email, `Hola ${foundUser.name} se agendo un turno a nuestro taller para el dia ${date} a las ${time},
         gracias por preferirnos. Por favor recuerda que en caso de no asisitir podrás cancelar el turno hasta 48 horas antes al turno.`);
   return res.status(201).json(newAppointment);
}

export const cancellApointment = async(req: Request, res: Response) => {
    const {id} = req.params;
    const cancell = await changeStatusMyAppointmentService(+id);
   return res.status(200).json({ message: cancell })
}