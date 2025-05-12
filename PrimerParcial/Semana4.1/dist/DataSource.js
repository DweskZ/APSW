"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    logging: true,
    // Esto carga todas las entidades compiladas en dist/models/*.js
    entities: [__dirname + "/models/*.js"],
    migrations: [],
    subscribers: [],
});
