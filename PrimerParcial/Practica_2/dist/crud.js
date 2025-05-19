"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearVistas = exports.eliminarUser = exports.actualizarUser = exports.obtenerUser = exports.obtenerUsers = exports.insertarUser = void 0;
const user_1 = require("./models/user");
const data_source_1 = require("./data-source");
const view_1 = require("./models/view");
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
    return null; // Retorna null si no se encuentra el usuario
};
exports.actualizarUser = actualizarUser;
//metodo eliminar 
const eliminarUser = async (id) => {
    const user2 = await (0, exports.obtenerUser)(id);
    if (user2) {
        await data_source_1.AppDataSource.manager.remove(user2);
        return true; // Retorna true si se eliminó correctamente
    }
    return null; // Retorna null si no se encuentra el usuario 
};
exports.eliminarUser = eliminarUser;
//metodo para crear vistas o views
const crearVistas = async (id, vista) => {
    const user1 = await (0, exports.obtenerUser)(id);
    if (user1) {
        const vista1 = new view_1.view();
        vista1.vista = vista;
        vista1.user = user1;
        return await data_source_1.AppDataSource.manager.save(vista1);
    }
    return null; // Retorna null si no se encuentra el usuario
};
exports.crearVistas = crearVistas;
