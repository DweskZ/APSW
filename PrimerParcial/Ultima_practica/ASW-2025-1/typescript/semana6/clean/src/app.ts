import 'reflect-metadata'; // Necesario para TypeORM
import 'dotenv/config';
import { envs } from './config/envs'; // Variables de entorno (PORT, PUBLIC_PATH)
import { AppRoutes } from './presentation/routes'; // Rutas globales
import { Server } from './presentation/server'; // Clase del servidor Express
import { initializeTypeORM } from './data/typeorm/typeorm.config'; // Conexión a DB

(async () => {
  main();
})();

async function main() {
  try {
    await initializeTypeORM();
    console.log('Database initialized');
  } catch (error) {
    console.error('Error during database initialization:', error);
    process.exit(1);
  }

  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
    routes: AppRoutes.routes,
  });

  server.start();
}
