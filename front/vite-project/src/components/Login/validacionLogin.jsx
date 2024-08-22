const validacionesLogin = (valores) => {
    let errores = {}
    !valores.username
        ? errores.username = 'Por favor ingrese un username' 
        : null;
    !valores.password
        ? errores.password = 'Por favor ingrese una password' 
        : null;
        
    return errores;
}
export default validacionesLogin;