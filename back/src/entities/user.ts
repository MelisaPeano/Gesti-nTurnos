import { Column, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Appointment} from "./appointments";
import { Credential } from "./Credentials";
import { Vehicle } from "./vehicle";

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 50,
    })
    name: string


    @Column()
    email: string


    @Column()
    birthdate: Date


    @Column("integer")
    nDni: number


    @OneToOne(() => Credential, (credentialId) => credentialId.user)
    @JoinColumn()
    credentialId: Credential;

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointment: Appointment[];

    @OneToMany(() => Vehicle, (vehicle) => vehicle.user)
    vehicles: Vehicle[];
// voy a almacenar en la base de datos solo la ruta del archivo.
    @Column({
        type: "varchar",
        length: 255, 
        nullable: true, 
    })
    profilePicturePath: string;

    @Column({
        type: "enum",
        enum: ["admin", "user", "employee"],
        default: "user",
        
    })
    role: string
  }