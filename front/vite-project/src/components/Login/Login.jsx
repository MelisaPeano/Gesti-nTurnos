import { Formik, Form, Field, ErrorMessage} from "formik";
import Formulario from "../Register/Formulario";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import validacionesLogin from "./validacionLogin";
import { useDispatch} from "react-redux";
import { setUser } from "../../redux/reducer";
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formEnviado, setFormEnviado] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    return (
        <>
        <Formulario>
          <Formik
          initialValues={{
            username: '',
            password: ''
         }}
         validate={validacionesLogin}
         onSubmit={(values, {resetForm}) => {
            axios.post("http://localhost:3000/users/login", values)
                .then((response)=>{
                console.log(response.data.tdoBien)
                if(response.data.tdoBien){
                    dispatch(setUser(setUser(response.data.tdoBien)));
                    resetForm();
                    setFormEnviado(true);
                    setTimeout(()=>  setFormEnviado(false), 3000)
                    navigate("/home")
                }
             })
            .catch(() => {
                setErrorMessage('Error, por favor intente nuevamente')
                setTimeout(() => setErrorMessage(""), 3000)
            }) 
               
        }}
        
          >
            {({ errors }) => (
            <Form >
                <label htmlFor="username"> </label>
                <Field
                    className= "formLogin"
                    name="username"
                    type="text"
                    id="username"
                    placeholder="Username"
                />
                <ErrorMessage name= "username" component={() => (<div className="error">{errors.username}</div>)} />
                <label htmlFor="password"> </label>
                <Field
                    className= "formLogin"
                    name="password"
                    type="password"
                    id="password"
                    placeholder="Password"
                />
                <ErrorMessage name= "password" component={() => (<div className="error">{errors.password}</div>)} />
                <button type="submit">Login</button>
                {formEnviado && <p className="exito">Usuario Logueado con exito</p>} 
                {errorMessage && <p className="error">{errorMessage}</p>}
            </Form>
         
       
     )}
    </Formik>
    </Formulario>
    </>
)}
export default Login; 