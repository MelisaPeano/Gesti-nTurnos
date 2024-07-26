import  IVehicleDto  from "../dto/IVehicle";

interface IUserDto {
    name: string,
    email:string,
    birthdate: string,
    dni: number,
    password: string,
    username: string
    vehicls: IVehicleDto
}

export default IUserDto