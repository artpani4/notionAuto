import { Client } from 'https://deno.land/x/notion_sdk/src/mod.ts';
import { DatabaseConfig } from '../config/databaseConfigSchema.ts';
import manager from '../config/manager.ts';
import { Trow } from '../notionDb/mod.ts';
import { PurePupilsData } from '../schema/mod.ts';
import { extractData, getDbsListByPage } from './databaseService.ts';

try {
  const config = await manager.localLoadConfig(
    (config: DatabaseConfig) => config.env === 'PURE',
  );
  if (config == null) throw new Error('Config not found');
  const notion = new Client({
    auth: config.apiKey,
  });

  const dbsList = await getDbsListByPage(notion, config.pageId);

  const myData = extractData(
    dbsList[0].results as Trow[],
  ) as PurePupilsData;
  console.log(myData);
} catch (e) {
  console.log(e);
  Deno.exit(0);
}
