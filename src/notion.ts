import { Client } from 'https://deno.land/x/notion_sdk/src/mod.ts';

import { getNumberFromSquareBrackets } from '../helpers/rowService.ts';
import { Trow } from '../notionDb/mod.ts';
import { PurePupilsData } from '../schema/mod.ts';
import { extractData, getDbsListByPage } from './databaseService.ts';

try {
  // const config = await manager.localLoadConfig(
  //   (config: DatabaseConfig) => config.env === 'PURE',
  // );
  // if (config == null) throw new Error('Config not found');
  const config = {
    env: 'PURE',
    apiKey: 'secret_6FjltgRbA8Ma61mAimwalGan3Y1rjXs9sqCgknlg6Bs',
    pageId: '27e6463cda3d48c2b085ae4f998d828a',
  } as DatabaseConfig;
  const notion = new Client({
    auth: config.apiKey,
  });

  const dbsList = await getDbsListByPage(notion, config.pageId);

  const myData = extractData(
    dbsList[0].results as Trow[],
  ) as PurePupilsData;

  const inf = {} as {
    [key: string]: number;
  };
  myData.Расписание.forEach((day, index) => {
    const total = (day as string[]).reduce((acc, cur) => {
      const num = getNumberFromSquareBrackets(cur);
      return acc + num;
    }, 0);
    inf[myData.День[index]] = total;
  });
  console.log(inf);
} catch (e) {
  console.log(e);
}
