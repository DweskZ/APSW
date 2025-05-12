import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./models/user"; // importa explícitamente

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db.sqlite",
  synchronize: true,
  logging: true,
  entities: [User], // usa directamente la clase importada
  migrations: [],
  subscribers: [],
});
