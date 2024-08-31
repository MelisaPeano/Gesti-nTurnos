import { Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./user";

@Entity() 

export class Credential {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password : string

    @OneToOne(() => User,(user) => user.credentialId)
    user: User
}