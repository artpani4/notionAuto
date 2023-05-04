import { ConfigManager } from 'http://localhost:8000/src/mod.ts';
import {
  DatabaseConfig,
  databaseConfigSchema,
} from './databaseConfig.ts';

const manager = new ConfigManager<
  DatabaseConfig,
  typeof databaseConfigSchema
>(
  databaseConfigSchema,
);

manager.addLocalConfigUrl('./config/databaseLocalConfig.ts');

export default manager;
