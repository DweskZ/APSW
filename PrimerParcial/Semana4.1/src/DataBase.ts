import {AppDataSource} from "./DataSource";
import "reflect-metadata"



export const InitDB = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Database initialized successfully");
        return AppDataSource; // Retorna la instancia de AppDataSource para su uso posterior 
    } catch (error) {
        console.error("Error initializing database:", error);
        throw error; // Lanza el error para que pueda ser manejado por el llamador
    }
}



