import { DataSource } from "typeorm";
import {DATABASE, PASSWORD, USERNAME} from "./envs"
import { User } from "../entities/User";
import { Credential } from "../entities/credentials";
import { Vehicle } from "../entities/vehiculos";
import { Appointment } from "../entities/appointments";
import { Servicio } from "../entities/servicios";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    //dropSchema : true,
    synchronize: true,
    logging: ["error"], // cambiar para que no muestre toda la query
    entities: [User, Credential, Vehicle, Appointment, Servicio],
    subscribers: [],
    migrations: [],

})

export const newCredential = AppDataSource.getRepository(Credential)
export const newVehicle = AppDataSource.getRepository(Vehicle)
export const newAppointment = AppDataSource.getRepository(Appointment)
export const newServicio = AppDataSource.getRepository(Servicio)