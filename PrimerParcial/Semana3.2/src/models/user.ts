import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Definición de la entidad User
// Esta entidad representa la tabla "users" en la base de datos

@Entity() // Decorador que indica que esta clase es una entidad de base de datos
export class User {
    @PrimaryGeneratedColumn() // Decorador que indica que esta propiedad es la clave primaria y se generará automáticamente
    id!: number; 

    @Column() // Decorador que indica que esta propiedad es una columna en la tabla
    name!: string;

    @Column()
    email!: string; 
}
