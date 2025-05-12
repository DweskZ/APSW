"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_1 = require("./DataBase");
const CRUD_1 = require("./CRUD");
async function main() {
    await DataBase_1.InitDB; // Inicializa la base de datos
    await (0, CRUD_1.insertUser)("Juan", "lf@gmail.com"); // Inserta un nuevo usuario en la base de datos
    console.log("Usuario insertado correctamente"); // Mensaje de éxito
}
main(); // Llama a la función principal para ejecutar el script 
