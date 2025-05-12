"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const user_1 = require("./models/user");
const view_1 = require("./models/view");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    logging: true,
    entities: [user_1.user, view_1.view],
    migrations: [],
    subscribers: [],
});
