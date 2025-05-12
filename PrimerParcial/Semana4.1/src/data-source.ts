import {user} from "./models/user";
import { view } from "./models/view";
import "reflect-metadata";
import {DataSource} from "typeorm";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    logging: true,
    entities: [user, view], 
    migrations: [],
    subscribers: [],  
    }
)