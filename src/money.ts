import { Client } from 'https://deno.land/x/notion_sdk/src/mod.ts';
import { DatabaseConfig } from '../config/databaseConfigSchema.ts';
import manager from '../config/manager.ts';
import { getNumberFromSquareBrackets } from '../helpers/rowService.ts';
import { Trow } from '../notionDb/mod.ts';
import { generateSchema } from '../schema/generator.ts';
import { PurePupilsData } from '../schema/mod.ts';
import { MoneyTable } from '../schema/money.ts';
import { extractData, getDbsListByPage } from './databaseService.ts';

try {
  // const config = await manager.localLoadConfig(
  //   (config: DatabaseConfig) => config.env === 'PURE',
  // );
  // if (config == null) throw new Error('Config not found');

  const config = {
    env: 'MONEY',
    apiKey: 'secret_6FjltgRbA8Ma61mAimwalGan3Y1rjXs9sqCgknlg6Bs',
    pageId: '2e79c94c8a7d4c319f0ee19582568e77',
  } as DatabaseConfig;
  const notion = new Client({
    auth: config.apiKey,
  });

  const dbsList = await getDbsListByPage(notion, config.pageId);

  const myData = extractData(
    dbsList[0].results as Trow[],
  ) as MoneyTable;
  //   generateSchema(myData, 'moneyTable', 'schema/money.ts');
  console.log(myData);
} catch (e) {
  console.log(e);
}
