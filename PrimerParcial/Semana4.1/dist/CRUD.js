"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertUser = void 0;
const user_1 = require("./models/user");
const DataSource_1 = require("./DataSource"); // Importa la fuente de datos
const insertUser = async (nombre, email) => {
    const user1 = new user_1.User(); // Crea una nueva instancia de la entidad User
    user1.name = nombre; // Asigna el nombre al usuario
    user1.email = email; // Asigna el email al usuario
    return await DataSource_1.AppDataSource.manager.save(user1); // Guarda el nuevo usuario en la base de datos
};
exports.insertUser = insertUser;
