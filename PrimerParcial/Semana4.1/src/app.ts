import {insertarUser} from './crud';
import {initDatabase} from './database';

async function main() {
    await initDatabase()
    const walter = await insertarUser("walter"," walterG@gmail.com")
    console.log(walter)
}

main()