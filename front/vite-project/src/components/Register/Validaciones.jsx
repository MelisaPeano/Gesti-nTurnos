const validaciones = (valores) => {
    let errores = {}
    
    !valores.name
        ? errores.name = 'Por favor ingrese un nombre' 
        : !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name) 
            ? errores.name = 'El nombre solo puede contener letras' 
            : null;

    !valores.email 
        ? errores.email = 'Por favor ingrese un email' 
        : !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email) 
            ? errores.email = 'Formato de email incorrecto' 
            : null;

    !valores.username
        ? errores.username = 'Por favor ingrese un username' 
        : !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.username) 
            ? errores.username = 'Formato de username incorrecto' 
            : null;
    !valores.nDni
        ? errores.nDni = 'Por favor ingrese un dni' 
        : valores.nDni.length !== 8
            ? errores.nDni = 'Formato de dni incorrecto' 
            : null;

    !valores.password 
        ? errores.password = 'Por favor ingrese una password' 
        :!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(valores.password)
            ? errores.password = 'La contraseña debe tener al menos 8 caracteres, una letra y un numero'
            : null;
    valores.password !== valores.repeatPassword
        ? errores.repeatPassword = 'Las contraseñas no coinciden'
        : null;
        

    return errores;

}

export default validaciones;

   