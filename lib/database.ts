import { DataSource } from 'typeorm';
import { Project } from './entities/Project';
import { ContactMessage } from './entities/ContactMessage';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: process.env.DATABASE_URL || './portfolio.db',
  entities: [Project, ContactMessage],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize().catch((err) => {
  console.error('Error during Data Source initialization:', err);
});