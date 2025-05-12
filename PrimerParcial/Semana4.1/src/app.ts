import {insertarUser} from './crud';
import {initDatabase} from './database';
import {obtenerUsers } from './crud';
import {obtenerUser} from './crud'
import { actualizarUser} from './crud';
import { eliminarUser } from './crud';
import { crearVistas } from './crud';
import { eliminarVista } from './crud';

async function main() {
    await initDatabase()
    const  newUser = await insertarUser("walter"," walterG@gmail.com")
    console.log(newUser);

    //Funcion para crear vistas 
    const vista = await crearVistas(newUser.id, 'Reportes de producto');
    console.log(vista);

    //funcion para obtener todos los usuarios
    const users = await obtenerUsers();
    console.log(users);

    // funcion para obtener un usuario
    const userOne = await obtenerUser(newUser.id); 
    console.log(userOne);

    //funcion para update
    const userUpdated = await actualizarUser(newUser.id, 'Jusan', 'Trump');
    console.log(userUpdated)

    //funcion para eliminar las vistas

    const viewsDelete = await eliminarVista(vista!.id); 
    console.log(viewsDelete);

    //funcion para eliminar usuario

    const userDelete = await eliminarUser(newUser.id);
    console.log(userDelete)

}


main()
