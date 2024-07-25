import { Entity, Column, OneToOne, PrimaryGeneratedColumn, JoinColumn, OneToMany } from "typeorm";
import { Credential } from "./Credentials";
import { Appointment } from "./appointments";
import { Vehicle } from "./vehicle";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column("integer")
  dni: number

 @OneToOne(() => Credential, (credentialId: Credential) => credentialId.user) 
 @JoinColumn()
 credentialId: Credential

 @OneToMany(() => Appointment, (appointment) => appointment.user)
 appointment: Appointment[];

 @OneToMany(()=> Vehicle, (vehicle) => vehicle.user)
 vehicles: Vehicle[];

    
}