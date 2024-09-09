import appointment from "../../assets/appointment.webp";
import { AppointmentNoneStyled } from "./ApointmentNone";
const AppointmentNone = () => {
    return (
        <AppointmentNoneStyled>
        <div>
            <img src={appointment} alt="appointment" />
            <h1>Upss..! No hay turnos...</h1>
        </div>
        </AppointmentNoneStyled>
    )
}
export default AppointmentNone;