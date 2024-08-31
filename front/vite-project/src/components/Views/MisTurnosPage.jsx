import { useState, useEffect } from 'react'
import Container from "../MyAppointment/MyAppointmentStyle"
import axios from "axios";
import AppoinmentUser from '../MyAppointment/AppointmentUser';
// aca solo debo tener el componente que renderiiza
const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetchCards();
    }, []);

    const fetchCards = async () => {
        try {
            const cargaDatos = await axios.get("http://localhost:3000/appointments");
            setAppointments(cargaDatos.data.slice(0, 5));
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>

            <Container>
                <h1>Mis Turnos</h1>
                {appointments.map((appointment) => {
                    return (
                        <AppoinmentUser
                            key={appointment.id}
                            time={appointment.time}
                            date={appointment.date}
                            status={appointment.status}
                            nDni={appointment.user.nDni}
                        />)
                }
                )
                }
            </Container>
        </>
    )
}

export default MyAppointments;