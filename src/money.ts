import { Client } from 'https://deno.land/x/notion_sdk/src/mod.ts';
import { DatabaseConfig } from '../config/databaseConfig.ts';
import manager from '../config/manager.ts';

import { Trow } from '../notionDb/mod.ts';
import { MoneyTable } from '../schema/money.ts';
import { extractData, getDbsListByPage } from './databaseService.ts';

try {
  const config = await manager.localLoadConfig(
    (config: DatabaseConfig) => config.name === 'LOCAL',
  );
  if (config == null) throw new Error('Config not found');

  const notion = new Client({
    auth: manager.getSecret('KEY'),
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
