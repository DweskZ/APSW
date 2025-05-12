import {user} from "./models/user";
import {AppDataSource} from './data-source';

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
    } else {
        throw new Error("User not found");
    }

}