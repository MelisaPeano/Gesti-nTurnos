import { Formik, Form, Field, ErrorMessage} from "formik";
import { useState } from "react";
import Formulario from "./Formulario";
import validaciones from "./validaciones";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducer";


const RegisterComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [message, setMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    return (
        <>
        {/* Estructura render-Prop Lo estamos pasando como funcion al formulario */}
        <Formulario>
        <Formik 
        initialValues={{
            name : '',
            email: '',
            birthdate: '',
            nDni: '',
            username: '',
            password: '',
            repeatPassword: ''

        }}
        validate= {validaciones}
        onSubmit={(values, {resetForm}) => {
            axios.post('http://localhost:3000/users/register', values)
            .then((response) => {
                console.log('Response:', response); 
                dispatch(setUser(response.data));
                navigate('/login');
                resetForm();
                setMessage(true);
                setTimeout(() => setMessage(false), 3000);
            }).catch(error => console.log(error))
            setErrorMessage('Error al enviar el formulario. Por favor, intenta nuevamente.');

           }}  
        > 
        {({errors}) => (
            <Form
                className="form">    
               <div>
                <label htmlFor="name"> </label>
                    <Field
                    name="name"
                    type= 'text'
                    id = 'name'
                    placeholder="Nombre"
                    />
                    <ErrorMessage name="name" component={() => (<div className="error">{errors.name}</div>)} />
               </div>
               <div>
                <label htmlFor="email"> </label>
                    <Field
                    name="email"
                    type= 'email'
                    id = "email"
                    placeholder="email"
                    />
                    <ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />
               </div>
               <div>
                <label htmlFor="birthdate"> </label>
                    <Field
                    name= "birthdate"
                    type=  "date"
                    id =  "birthdate"
                    placeholder=  "birthdate"
                    />
                    <ErrorMessage name="Birthdate" component={() => (<div className="error">{errors.birthdate}</div>)} />
               </div>
               <div>
                <label htmlFor="nDni"> </label>
                    <Field
                    name="nDni"
                    type= "number"
                    id = "nDni"
                    placeholder= 'DNI'
                    />
                    <ErrorMessage name='nDni' component={() => (<div className="error">{errors.nDni}</div>)} />
               </div>
               <div>
                <label htmlFor= 'username'> </label>
                    <Field
                    name= 'username'
                    type= 'text'
                    id = 'username'
                    placeholder= 'username'
                    />
                    <ErrorMessage name='username' component={() => (<div className="error">{errors.username}</div>)} />
               </div>
               <div>
                <label htmlFor='password'> </label>
                    <Field
                    name= 'password'
                    type= 'password'
                    id = 'password'
                    placeholder= 'password'
                    />
                    <ErrorMessage name='password' component={() => (<div className="error">{errors.password}</div>)} />
               </div>
               <div>
                <label htmlFor= 'repeatPassword'> </label>
                    <Field
                    name= 'repeatPassword'
                    type= 'password'
                    id = 'repeatPassword'
                    placeholder= 'repeatPassword'
                    />
                    <ErrorMessage name='repeatPassword' component={() => (<div className="error">{errors.repeatPassword}</div>)} />
               </div>
           
                <button type='submit'>Register</button>
                {message && <p className="exito">Formulario enviado con exito</p>}
                {errorMessage && <p className="error">{errorMessage}</p>}
            </Form>
        )} 
         </Formik>
         </Formulario>
    </>
    )
}

export default RegisterComponent;