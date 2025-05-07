import {User} from "./models/user";
import "reflect-metadata"; 
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    logging: true,
    entities: [User], // Aquí se especifica la entidad User
    migrations: [],
    subscribers: [],
});

