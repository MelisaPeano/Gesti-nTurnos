npm install para instalar las dependencias necesarias en carpeta back/front.
Deberás instalar Node.js y Typescript.
Iniciar el backend:  npx nodemon
Remplace los valores necesarios para Data Surce, creando un .env


Este proyecto esta configurado en el backend con Typescript y TypeORM como base de datos Postgres SQL.
Funcionalidades: Permite registrar usuarios con diferentes roles usando JWT. Las contraseñas de los usuarios son Hasheadas 
al momento de la creación del usuario.
Esta diseñado con el módelo de arquitectura vista-controlador.
El usuario puede registrarse, luego loguearse entrar en su perfil, crear nuevos turnos, cancelarlos y puede ver 
y modificar su perfil de usuario.
En el frontend se controla el estado por medio de Redux-toolkit