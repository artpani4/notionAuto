import { generateSchema } from '../schema/generator.ts';
import { DatabaseConfig } from './databaseConfigSchema.ts';

const databaseLocalConfig = {
  env: 'LOCAL',
  apiKey: 'secret_6FjltgRbA8Ma61mAimwalGan3Y1rjXs9sqCgknlg6Bs',
  pageId: '2e79c94c8a7d4c319f0ee19582568e77',
} as DatabaseConfig;

// generateSchema(
//   databaseLocalConfig,
//   'databaseConfig',
//   'config/databaseConfig.ts',
// );
export default databaseLocalConfig;
