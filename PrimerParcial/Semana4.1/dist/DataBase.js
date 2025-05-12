"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDatabase = void 0;
const data_source_1 = require("./data-source");
require("reflect-metadata");
const initDatabase = async () => {
    try {
        // await AppDataSource.initialize();
        await data_source_1.AppDataSource.initialize();
        console.log("Database initialized successfully.");
        return data_source_1.AppDataSource;
    }
    catch (ex) {
        console.error("Error initializing database:", ex);
        throw ex; // Rethrow the error to be handled by the caller
    }
};
exports.initDatabase = initDatabase;
