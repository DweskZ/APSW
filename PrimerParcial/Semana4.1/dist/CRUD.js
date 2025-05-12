"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarUser = exports.obtenerUser = exports.obtenerUsers = exports.insertarUser = void 0;
const user_1 = require("./models/user");
const data_source_1 = require("./data-source");
// Funciones CRUD para la entidad User
const insertarUser = async (nombre, correo) => {
    const user1 = new user_1.user();
    user1.correo = correo;
    user1.nombre = nombre;
    return await data_source_1.AppDataSource.manager.save((user1));
};
exports.insertarUser = insertarUser;
// Función para obtener todos los usuarios
const obtenerUsers = async () => {
    return await data_source_1.AppDataSource.manager.find(user_1.user);
};
exports.obtenerUsers = obtenerUsers;
// Función para obtener un usuario por su ID
const obtenerUser = async (id) => {
    return await data_source_1.AppDataSource.manager.findOne(user_1.user, {
        where: { id }
    });
};
exports.obtenerUser = obtenerUser;
// Funcion para actualizar un usuario
const actualizarUser = async (id, nombre, correo) => {
    const user2 = await (0, exports.obtenerUser)(id);
    if (user2) {
        user2.nombre = nombre;
        user2.correo = correo;
        return await data_source_1.AppDataSource.manager.save(user2);
    }
    else {
        throw new Error("User not found");
    }
};
exports.actualizarUser = actualizarUser;
