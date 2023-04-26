import { ConfigManager } from 'https://deno.land/x/tuner@v0.0.2/src/mod.ts';
import {
  DatabaseConfig,
  databaseConfigSchema,
} from './databaseConfigSchema.ts';

const manager = new ConfigManager<
  DatabaseConfig,
  typeof databaseConfigSchema
>(
  databaseConfigSchema,
);

manager.addLocalConfigUrl('./config/databaseLocalConfig.ts');
manager.addLocalConfigUrl('./config/databasePupilsConfig.ts');
manager.addLocalConfigUrl('./config/databasePurePupilsConfig.ts');

export default manager;
