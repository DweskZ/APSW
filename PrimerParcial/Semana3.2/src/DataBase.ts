import {AppDataSource} from "./dataSource";
import "reflect-metadata"



export const InitDB = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Database initialized successfully");
    } catch (error) {
        console.error("Error initializing database:", error);
    }
}

