import {user} from "./models/user";
import {AppDataSource} from './data-source';
import {view} from "./models/view";

// Funciones CRUD para la entidad User
export const insertarUser = async (nombre: string, correo: string) => {
    const user1 = new user();
    user1.correo = correo;
    user1.nombre = nombre;
    return await AppDataSource.manager.save((user1))
}
// Función para obtener todos los usuarios
export const obtenerUsers = async () => {
    return await AppDataSource.manager.find(user);
}

// Función para obtener un usuario por su ID
export const obtenerUser = async (id: number) => {
    return await AppDataSource.manager.findOne(user, {
        where: { id}
    });
}   

// Funcion para actualizar un usuario
export const actualizarUser = async (id: number, nombre: string, correo: string) => { 
    const user2 = await obtenerUser(id);
    if (user2) {
        user2.nombre = nombre;
        user2.correo = correo;
        return await AppDataSource.manager.save(user2);
    } 
    return null; // Retorna null si no se encuentra el usuario
    }


//metodo eliminar 

export const eliminarUser = async (id: number) => {
    const user2 = await obtenerUser(id); 
    if (user2) {
        await AppDataSource.manager.remove(user2);
        return true; // Retorna true si se eliminó correctamente
    }
    return null; // Retorna null si no se encuentra el usuario 
}


//metodo para crear vistas o views

export const crearVistas = async(id: number, vista: string) => {
    const user1 = await obtenerUser(id);
    if (user1) {
        const vista1 = new view();
        vista1.vista = vista;
        vista1.user = user1;
        return await AppDataSource.manager.save(vista1);
    }
    return null; // Retorna null si no se encuentra el usuario

}

export const eliminarVista = async (id: number) => { 
    const viewEliminada = await AppDataSource.manager.findOne(view, {where:{id}})
    if (viewEliminada) {

        return await AppDataSource.manager.remove(viewEliminada);
    }
    return null; // Retorna null si no se encuentra el usuario
}