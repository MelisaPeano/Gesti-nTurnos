import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Vehicle } from "./vehicle";


enum servicioTipo {
  optionOne = "revisión, alienado, balanceado, cambio de aceite",
  optionTwo = "Tren delantero, arreglos de alineado",
  optionThree = "Servicios de gomeria",
  optionFour = "Servicios de administracion",

}

@Entity()
export class Servicio {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: "enum",
    enum: servicioTipo,
  })
  tipo: servicioTipo

  @OneToOne(() => Vehicle, (vehicle) => vehicle.servicio)
  vehicle: Vehicle
}