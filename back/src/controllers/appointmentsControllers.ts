import { Request, Response } from "express";
import { appointmentsScheduleService, addAppointmentService, changeStatusMyAppointmentService, myAppointmentService } from "../services/appointmentsServices";
import { catchAsync, catchAsync404 } from "../utils/catchAsync";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user";
import IAppointmentDto from "../dto/IAppointmentDto";

const getAppointments = async (req: Request, res: Response) => {
    const appointment= await appointmentsScheduleService();
    res.status(200).json(appointment) 

}

const  myAppointment = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.body;
    if (!userId) {
        res.status(400).json({ error: "userId is required" });
        return;
    }
    const myAppoint = await myAppointmentService(+userId);
    res.status(200).json(myAppoint)
}

enum status {
    ACTIVE = "active",
    CANCELED = "canceled",
}

const addAppointment = async (req: Request, res: Response) => {
    const { date, time, userId } = req.body;
    const [day, month, year] = date.split("-").map(Number);
    const formatedDate = new Date(year, month - 1, day);
     if(isNaN(formatedDate.getTime())) {
        res.status(400).json({ error: "invalid date" });
        return;
    }

    const [hours, minutes] = time.split(":").map(Number);
    if(isNaN(hours) || isNaN(minutes)) {
        res.status(400).json({ error: "invalid time" });
        return;
    }

    formatedDate.setHours(hours, minutes);

    if(!userId) {
        res.status(400).json({ error: "userId is required" });
        return;
    }

    const userRepository = AppDataSource.getRepository(User);
    const fundUser = await userRepository.findOneBy({ id: userId });
    if(!fundUser) {
        res.status(404).json({ error: "user not found" });
        return;
    }
     const newAppointmentData: IAppointmentDto = {
        date: formatedDate,
        time: time,
        userId: userId,
        status: status.ACTIVE
    };

    const newAppointment = await createNewAppointmentService(newAppointmentData);
    res.status(201).json(newAppointment)

}

const cancellAppointment = async (req: Request, res: Response) => {
    const { id } = req.params;
    const cancellAppointment = await changeStatusMyAppointmentService(+id);
    res.status(200).json(cancellAppointment)
}


export const appointmentControllers = {
    getAppointments: catchAsync(getAppointments),
    myAppointment: catchAsync404(myAppointment),
    addAppointment: catchAsync(addAppointment),
    cancellAppointment: catchAsync404(cancellAppointment)
}