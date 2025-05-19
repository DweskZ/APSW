import "reflect-metadata";
import {DataSource} from "typeorm";
import { Grabacion } from "./models/Grabacion";
import { Feedback } from "./models/Feedback";
import { NavegacionSlide } from "./models/NavegacionSlide";
import { ParametroIdeal } from "./models/ParametroIdeal";
import { Slide } from "./models/Slide";


export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "exposia_db",
  synchronize: true,
  logging: false,
  entities: [Grabacion, NavegacionSlide, Feedback, ParametroIdeal, Slide],
});