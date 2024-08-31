import { Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { User } from "./user";


@Entity(
    {
        name: "appointments"
    }) 
 export class Appointment {
        @PrimaryGeneratedColumn()
        id:number

        @Column({ type:'timestamp' })
        date: Date

        @Column({type: 'time' })
        time: string

        @Column()
        status: string

       @ManyToOne(() => User, (userId: User) => userId.appointment)
       user: User


    }