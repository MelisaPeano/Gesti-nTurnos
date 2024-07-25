import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany, ManyToOne } from "typeorm";
import { User } from "./user";
import { Servicio } from "./servicios";

@Entity()


export class Vehicle {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    marca: string

    @Column()
    year: number

    @ManyToOne(() => User, (userId: User) => userId.vehicles)
    user: User

    @OneToOne(() => Servicio, (servicioId: Servicio) => servicioId.vehicle)
    servicio: Servicio;
    
}