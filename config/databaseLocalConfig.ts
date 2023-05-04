import { generateSchema } from '../schema/generator.ts';

const databaseLocalConfig = {
  name: 'LOCAL',
  secrets: [
    {
      name: 'KEY',
      value: '',
    },
  ],
  pageId: '2e79c94c8a7d4c319f0ee19582568e77',
};

// generateSchema(
//   databaseLocalConfig,
//   'databaseConfig',
//   'config/databaseConfig.ts',
// );
export default databaseLocalConfig;
