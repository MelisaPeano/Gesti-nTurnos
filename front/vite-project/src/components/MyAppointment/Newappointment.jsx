import { ErrorMessage, Field, Formik, Form } from "formik"
import axios from "axios"
import { useState } from "react";
import Formulario from "../Register/Formulario";
import { useDispatch, useSelector } from "react-redux";
import { filterUser } from "../../redux/reducer";
import validateNewAppointment from "./validateNewAppoinment";
const AgendarAppoinmtent = () => {
   
    const [success, setSuccess] = useState(false);
    const [err, setErrors] = useState("")
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user?.user.payload.user.id);
    console.log(user)
    return (
        <div>
            <Formik
                initialValues={{
                    date: '',
                    time: '',
                    userId: user,
                }}
                validate={validateNewAppointment}
                onSubmit={(values, { resetForm }) => {
                    const formattedDate = new Date(values.date).toISOString().split('T')[0];
                    console.log('Valores enviados:', {
                        date: formattedDate,
                        time: values.time,
                        userId: values.userId,
                    });
                    axios.post("http://localhost:3000/appointments/schedule", {
                        date: values.date,
                        time: values.time,
                        userId: values.userId,
                    })
                        .then((response) => {
                            resetForm();
                            setErrors("");
                            setSuccess(true);
                            setTimeout(() => setSuccess(false), 2000);
                            dispatch(filterUser({ type: 'APPOINTMENT', appointment: response.data }));
                        })
                        .catch((error) => {
                            console.error('Error en la solicitud:', error);
                            setErrors('Error al cargar los turnos.')
                            setSuccess(false);
                        })
                }}
            >
                {({ setFieldValue, errors }) => (
                    <Formulario>
                        <Form>
                            <label htmlFor="date">Fecha</label>
                            <Field
                                type="date"
                                name="date"
                                placeholder="Selecciona una fecha"
                                id="date"
                                
                            />
                            <ErrorMessage name="date" component={() => (<div className="error">{errors.date}</div>)} />
                            <label htmlFor="time">Hora</label>
                            <Field
                                placeholder="Hora"
                                type="time"
                                name="time"
                                id="time"
                            />
                            <ErrorMessage name="time" component={() => (<div className="error">{errors.time}</div>)} />
                            <button type="submit">Enviar</button>
                            {success && <p>Turno creado con exito</p>}
                        </Form>
                    </Formulario>
                )}
            </Formik>
        </div>
    )
}
export default AgendarAppoinmtent