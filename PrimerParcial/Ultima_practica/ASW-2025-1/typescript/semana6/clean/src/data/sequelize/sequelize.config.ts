import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

config(); // Carga las variables desde .env

console.log('[DEBUG] process.env.POSTGRES_URL:', process.env.POSTGRES_URL);

export const sequelize = new Sequelize(process.env.POSTGRES_URL || '', {
  dialect: 'postgres', // cambia si usas MySQL
  logging: process.env.NODE_ENV === 'development',
});
