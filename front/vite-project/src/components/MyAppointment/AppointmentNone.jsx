import appointment from "../../assets/appointment.webp";
const AppointmentNone = () => {
    return (
        <div>
            <img src={appointment} alt="appointment" />
            <h1>Upss..! No hay turnos, por favor agende uno aqui</h1>
        </div>
    )
}
export default AppointmentNone;