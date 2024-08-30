import {Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Vehicle } from "./vehicle";



export enum ServicioTipo {
    OptionOne = "revisión, alineado, balancado, cambio de aceite",
    OptionTwo = "tren delantero, arreglos de alineado",
    OptionThree = "servicios de gomeria",
    OptionFord = "administrativo",
    OptionDefault = ""
}
@Entity()

export class Servicio {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "enum",
        enum: ServicioTipo
    })
    tipo: ServicioTipo;

   @OneToOne(() => Vehicle, (vehicle) => vehicle.servicio)
   vehicle: Vehicle;
}