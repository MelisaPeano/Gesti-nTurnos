import IAppointmentDto from "../dto/IAppointmentDto";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user";
import { Appointment } from "../entities/appointments";

export const crearNewAppointment = async (appointment: IAppointmentDto): Promise<Appointment> => {
    const appointmentRepository = AppDataSource.getRepository(Appointment);
    const userRepository = AppDataSource.getRepository(User);
    const userId = typeof appointment.userId === "string" ? parseInt(appointment.userId, 10) : appointment.userId;
    const user = await userRepository.findOneBy({ id: userId });
    if(!user) {
        throw new Error("user not found");
    }
    const newAppointment = appointmentRepository.create({
        ...appointment,
        user
    })

    await appointmentRepository.save(newAppointment);
    return newAppointment
}

export const appointmentScheduleService = async (appointments: IAppointmentDto): Promise<Appointment[]> => {
    const appointment = await AppDataSource.getRepository(Appointment).find();
    return appointment;
}

export const myAppointmentService = async (userId: number): Promise<Appointment[]> => {
    const consultation = await AppDataSource.getRepository(Appointment)
     let myAppoint = await consultation.find({
        where: { user: { id: userId } },
        relations: ["user"],
     })   
     if (!myAppoint) {
        throw new Error("user not found") 
     }
     return myAppoint;
}   
      

const changeStatusAppointmentService = async (id: number): Promise<string | undefined> => {
    const appointmentRepository = AppDataSource.getRepository(Appointment);
    const appointment = await appointmentRepository.findOneBy({ id });
    if (!appointment) {
        throw new Error("appointment not found");
    }
    appointment.status = "canceled";
    await appointmentRepository.save(appointment);
    return appointment.status
}
