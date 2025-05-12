"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crud_1 = require("./crud");
const database_1 = require("./database");
async function main() {
    await (0, database_1.initDatabase)();
    const walter = await (0, crud_1.insertarUser)("walter", " walterG@gmail.com");
    console.log(walter);
}
main();
