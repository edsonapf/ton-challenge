import { ConnectionOptions, createConnection } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

const options = {
  name: 'default',
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [process.env.TYPEORM_ENTITIES],
  migrations: [process.env.TYPEORM_MIGRATIONS],
  cli: {
    migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
  },
  logging: process.env.TYPEORM_LOGGING === 'true',
  ssl: {
    rejectUnauthorized: false,
  },
} as ConnectionOptions;

const startDatabase = async (): Promise<void> => {
  console.log('Starting database...');
  await createConnection(options);
  console.log('Database started!');
};

export default startDatabase;
