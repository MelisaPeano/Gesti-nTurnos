import IAppointmentDto from "../dto/IAppointmentDto";
import { Appointment } from "../entities/appointments";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";



export const crearNewAppointmentService =  async (data: IAppointmentDto): Promise<Appointment> => {
    const appointmentRepository = AppDataSource.getRepository(Appointment);
    const nuevoUser = AppDataSource.getRepository(User);
    const userId = typeof data.userId === 'string' ? parseInt(data.userId, 10) : data.userId;
    const user = await nuevoUser.findOneBy({ id: userId });
    if (!user) {
        throw new Error('Usuario no encontrado');
    }

    const newAppointment = appointmentRepository.create({
        ...data,
        user
    });
   

    await appointmentRepository.save(newAppointment);

    return newAppointment; 
}

export const appointmentsScheduleService = async (): Promise<Appointment[]> => {
    const appointments = await AppDataSource.getRepository(Appointment).find();
    return appointments
}

export const myAppointmentService = async (userId: number): Promise<Appointment> => {
    const consultation = AppDataSource.getRepository(Appointment)
    const myAppoint = await consultation.findOne({where: {id: userId}, relations: ['user']})
    if (!myAppoint) {
        throw new Error(`Cita con ID ${userId} no encontrada`);
    } 
    return myAppoint;
}


export const changeStatusMyAppointmentService = async (id: number): Promise<string | undefined> => {
    const consultation = AppDataSource.getRepository(Appointment)
    const myAppoint = await consultation.findOne({
        where: { id },
        relations: ['user'] 
    });
    if (!myAppoint) {
        throw new Error(`Cita con ID ${id} no encontrada`);
    }
    if(myAppoint.status === "cancelled"){
        return (`su cita esta cancelada`)
    }
    const appointmentDate = new Date(myAppoint.date);
    const currentDate = new Date();
    const diffInMs = appointmentDate.getTime() - currentDate.getTime();
    const diffInHours = diffInMs / (1000 * 60 * 60);
    
    if (diffInHours <= 48) {
        myAppoint.status = "active";
        await consultation.save(myAppoint);
        return "Su cita no se puede cancelar";
    }
    
    myAppoint.status = "cancelled";
    await consultation.save(myAppoint);
    return "Su cita ha sido cancelada";
}