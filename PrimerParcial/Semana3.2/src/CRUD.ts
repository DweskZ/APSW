import {User} from './models/user';
import { AppDataSource } from './dataSource'; // Importa la fuente de datos

export const insertUser = async (nombre: string, email: string) => {
    const user1 = new User(); // Crea una nueva instancia de la entidad User
    user1.name = nombre; // Asigna el nombre al usuario
    user1.email = email; // Asigna el email al usuario
    return await AppDataSource.manager.save(user1); // Guarda el nuevo usuario en la base de datos
}