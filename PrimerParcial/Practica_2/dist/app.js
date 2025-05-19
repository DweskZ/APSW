"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crud_1 = require("./crud");
const database_1 = require("./database");
const crud_2 = require("./crud");
const crud_3 = require("./crud");
const crud_4 = require("./crud");
const crud_5 = require("./crud");
async function main() {
    await (0, database_1.initDatabase)();
    const newUser = await (0, crud_1.insertarUser)("walter", " walterG@gmail.com");
    console.log(newUser);
    //Funcion para crear vistas 
    const vista = await (0, crud_5.crearVistas)(newUser.id, 'Reportes de producto');
    console.log(vista);
    //funcion para obtener todos los usuarios
    const users = await (0, crud_2.obtenerUsers)();
    console.log(users);
    // funcion para obtener un usuario
    const userOne = await (0, crud_3.obtenerUser)(newUser.id);
    console.log(userOne);
    //funcion para update
    const userUpdated = await (0, crud_4.actualizarUser)(newUser.id, 'Jusan', 'Trump');
    console.log(userUpdated);
    //funcion para eliminar
    //const userDelete = await eliminarUser(newUser.id);
    //console.log(userDelete)
}
main();
