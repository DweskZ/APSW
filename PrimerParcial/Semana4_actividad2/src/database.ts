import {AppDataSource} from "./data-source"
import 'reflect-metadata';

export const initDatabase = async () => {
    try {
        // await AppDataSource.initialize();
        await AppDataSource.initialize();
        console.log("Database initialized successfully.");
        return AppDataSource;
    } catch (ex) {
        console.error("Error initializing database:", ex);
        throw ex; // Rethrow the error to be handled by the caller
    }
}
