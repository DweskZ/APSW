"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitDB = void 0;
const DataSource_1 = require("./DataSource");
require("reflect-metadata");
const InitDB = async () => {
    try {
        await DataSource_1.AppDataSource.initialize();
        console.log("Database initialized successfully");
        return DataSource_1.AppDataSource; // Retorna la instancia de AppDataSource para su uso posterior 
    }
    catch (error) {
        console.error("Error initializing database:", error);
        throw error; // Lanza el error para que pueda ser manejado por el llamador
    }
};
exports.InitDB = InitDB;
