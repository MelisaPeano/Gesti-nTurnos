import { DataSource } from "typeorm";
import { DATABASE, PASSWORD, USERNAME } from "./envs";
import { User } from "../entities/user";
import { Credential } from "../entities/Credentials";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    synchronize: true,
    logging: true,
    entities: [User, Credential],
    subscribers: [],
    migrations: [],
})

