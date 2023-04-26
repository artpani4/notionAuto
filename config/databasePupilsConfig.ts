import { generateSchema } from '../schema/generator.ts';
import { DatabaseConfig } from './databaseConfigSchema.ts';
const databaseLocalConfig = {
  env: 'PUPILS',
  apiKey: 'secret_6FjltgRbA8Ma61mAimwalGan3Y1rjXs9sqCgknlg6Bs',
  pageId: 'a5e52fe49723421ea8a0ae1bb3b6da44',
} as DatabaseConfig;

// generateSchema(
//   databaseLocalConfig,
//   'databaseConfig',
//   'config/databaseConfig.ts',
// );
export default databaseLocalConfig;
