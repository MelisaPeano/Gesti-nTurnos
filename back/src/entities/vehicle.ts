import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { User } from "./User";
import { Servicio } from "./servicios";

@Entity()

export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    brand: string

    @Column()
    year: number

    @Column()
    color : string

    @Column()
    model: string

    @ManyToOne(() => User, (userId: User) => userId.vehicles)
    user: User

    @OneToOne(() => Servicio, (servicio) => servicio.vehicle) 
    servicio: Servicio[];
}