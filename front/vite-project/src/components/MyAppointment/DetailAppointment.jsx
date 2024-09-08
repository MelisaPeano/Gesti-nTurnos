import { useEffect, useState } from "react";
import axios from "axios";
import AppoinmentUser from "./AppointmentUser";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterUser } from "../../redux/reducer";
import AppointmentNone from "./AppointmentNone";
import DetailStyle from "./ DetailStyles"
import { useCancelAppoinmentMutation } from "../../redux/appointmentReducer";

const DetailAppoinment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [appointmentStatus, setAppointmentStatus] = useState([]);
    const [visibleAppointments, setVisibleAppointments] = useState(5);
    const [error, setError] = useState(null);
    const user = useSelector((state) => state.user?.user?.payload?.user?.id)
    const [cancelAppointment] = useCancelAppoinmentMutation();
    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                if (user) {
                    const response = await axios.get(`http://localhost:3000/users/${user}`)
                    if (response.data && Array.isArray(response.data.detail.appointment)) {
                        console.log(response.data)

                        const sortedAppointments = response.data.detail.appointment.sort((a, b) => {
                            if (a.status === "active" && b.status !== "active") return -1;
                            if (a.status !== "active" && b.status === "active") return 1;
                            return 0;
                        });

                        setAppointmentStatus(sortedAppointments);
                        dispatch(filterUser({ type: 'APPOINTMENT', appointment: sortedAppointments }));
                    }
                }


            } catch (error) {

                setError(error, 'Error al cargar los turnos.')
            }
        }
        fetchAppointments();

    }, [dispatch, navigate, user])


    const loadMoreAppointments = () => {
        setVisibleAppointments((prevVisible) => prevVisible + 5);
    };

    const handleCancel = async (id) => {

        try {
            const appointment = appointmentStatus.find(appointment => appointment.id === id);
            if (!appointment) {
                console.error('Appointment not found');
                return;
            }
            
            const result = await cancelAppointment(id).unwrap();
            alert(result.message);
            setAppointmentStatus(prevState =>
                prevState.map(appointment =>
                    appointment.id === id ? { ...appointment, status: 'cancelled' } : appointment

                )

            );

        } catch (error) {
            console.error('Failed to cancel appointment:', error);
        }
    }
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${year}/${month}/${day}`;
    };
    const formatTime = (timeString) => {
        const [hour, minute] = timeString.split(':');
        const hourInt = parseInt(hour);
        const ampm = hourInt >= 12 ? 'PM' : 'AM';
        const formattedHour = hourInt % 12 || 12;
        return `${String(formattedHour).padStart(2, '0')}:${minute} ${ampm}`;
    };

    return (
        <div>
            {appointmentStatus.status === 'loading' && <p>Cargando citas...</p>}
            {appointmentStatus.status === 'failed' && <p>Error: {error}</p>}
            {appointmentStatus.length === 0 ? (
                <AppointmentNone />
            ) : (
                <ul style={{ listStyle: 'none' , display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    {appointmentStatus.slice(0, visibleAppointments).map((appointment) => (
                        <li key={appointment.id}>
                            <AppoinmentUser
                                date={formatDate(appointment.date)}
                                time={formatTime(appointment.time)}
                                status={appointment.status}
                                handleCancel={() => handleCancel(appointment.id)}

                            />
                        </li>
                    ))}
                </ul>
            )}
            <DetailStyle>
                {visibleAppointments < appointmentStatus.length && (
                    <button onClick={loadMoreAppointments}>
                        Cargar más turnos
                    </button>
                )}

                <button onClick={() => navigate("/appointments/schedule")}>Agendar Turno</button>
            </DetailStyle>

        </div>
    );

}








export default DetailAppoinment;