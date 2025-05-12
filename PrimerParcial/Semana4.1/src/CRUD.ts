import {User} from './models/user';
import { AppDataSource } from './DataSource'; // Importa la fuente de datos

export const insertUser = async (nombre: string, email: string) => {
    const user1 = new User(); // Crea una nueva instancia de la entidad User
    user1.name = nombre; // Asigna el nombre al usuario
    user1.email = email; // Asigna el email al usuario
    return await AppDataSource.manager.save(user1); // Guarda el nuevo usuario en la base de datos
}


export const consultarUsuarios = async () => {
    return await AppDataSource.manager.find(User); // Devuelve todos los usuarios de la base de datos
}

export const consultaIndividual = async (id: number) => {
    return await AppDataSource.manager.findOneBy(User, { id }); // Devuelve un usuario específico por su ID
}