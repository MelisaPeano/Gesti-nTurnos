interface IAppointmentDto {
    date: Date;
    time: string;
    userId: number;
    status: estado;
}

enum estado  {
    accepted = "accepted",
    rejected = "cancelled",
}

export default IAppointmentDto;