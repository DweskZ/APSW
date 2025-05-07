import {InitDB} from "./DataBase";

import {insertUser} from "./CRUD";



async function main() {
    await InitDB; // Inicializa la base de datos
    await insertUser("Juan", "lf@gmail.com"); // Inserta un nuevo usuario en la base de datos
    console.log("Usuario insertado correctamente"); // Mensaje de éxito

}

main(); // Llama a la función principal para ejecutar el script 
