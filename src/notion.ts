import { Client } from 'https://deno.land/x/notion_sdk/src/mod.ts';
import { z } from 'https://deno.land/x/zod/mod.ts';
import { generateSchema } from '../schema/generator.ts';

const notion = new Client({
  auth: 'secret_dDEzQhxtaY9mUH14YuN5ftX8obDOK4koYj3GMJpGkZP',
});
// import {
//   PageObjectResponse,
//   RichTextItemResponse,
// } from 'https://deno.land/x/notion_sdk/src/api-endpoints.ts';
// import {
//   getTimesAsStringFromDay,
//   getTotalSumDay,
// } from '../helpers/getters.ts';
// import { getSchema } from '../schema/database.ts';
// import z from 'https://deno.land/x/zod@v3.21.4/index.ts';

// import { Block } from './schema/block.ts';
// import { Database } from './schema/database.ts';

// const notion = new Client({
//   auth: 'secret_eX3zDFMhu1JBAkBxDgn7WZ2dTnXMSDVynGZGAevrqPf',
// });
// // https://artpani.notion.site/1-4e6b825b73664056855c5f6ed5935d4f
// // https://www.notion.so/artpani/1-4e6b825b73664056855c5f6ed5935d4f?pvs=4

// // const pageId = '4e6b825b73664056855c5f6ed5935d4f';
// const databaseId = 'aa1f81ff8fa142daad41a66a4cfdd6d3';

// const response = await notion.databases.query({
//   database_id: databaseId,
// }) as Database;
// console.log(response);

// generateSchema(response, 'database', 'src/schema/database.ts');

// const response = await notion.pages.retrieve({ page_id: pageId });
// console.log(response);

// https://www.notion.so/artpani/aa1f81ff8fa142daad41a66a4cfdd6d3?v=b60aac838321476a8e5fbbd83dedeaba&pvs=4

// https://www.notion.so/artpani/a5e52fe49723421ea8a0ae1bb3b6da44?pvs=4#bb9262534cf44388b581f08713fffd4b
// const response = await notion.blocks.retrieve({
//   block_id: 'bb9262534cf44388b581f08713fffd4b',
// });

// generateSchema(response, 'block', 'src/schema/block.ts');

// const a = getSchema(response);

// type b = z.infer<typeof a>;

// const botConfigExample = {
//   env: 'LOCAL',
//   telegram: {
//     botToken: 'ololo',
//     chatId: '123213',
//   },
//   database: {
//     host: 'trololo',
//     port: 1488,
//     database: 'supabase',
//     username: 'ololoev',
//     password: 'mmm',
//   },
// };

// generateSchema2(
//   botConfigExample,
//   'botConfig',
//   'src/schema/botConfig.ts',
// );

// import { generateSchema } from '../schema/generator.ts';
// import { BotConfig } from './schema/botConfig.ts';

// export const localBotConfig = {
//   env: 'LOCAL',
//   telegram: {
//     botToken: 'ololo',
//     chatId: '123213',
//   },
//   database: {
//     host: 'trololo',
//     port: 1488,
//     database: 'supabase',
//     username: 'ololoev',
//     password: 'mmm',
//   },
// } as BotConfig;

// generateSchema(
//   localBotConfig,
//   'botConfig',
//   'src/schema/botConfig.ts',
// );

// secret_dDEzQhxtaY9mUH14YuN5ftX8obDOK4koYj3GMJpGkZP

//--------------------------------------------------------------
// const page_id = '5df1549d81624183902f7dfb8f19e3b7';

// const response = await notion.blocks.children.list({
//   block_id: page_id,
// });

// // console.log(response);
// generateSchema(response, 'pageChildren', 'src/schema/page.ts');
// https://www.notion.so/denostep/Development-5df1549d81624183902f7dfb8f19e3b7?pvs=4

const a = {
  b: 10,
  c: 20,
  d: [
    {
      e: 30,
      f: 40,
    },
    {
      e: 50,
      h: 60,
    },
  ],
};

generateSchema(a, 'a', 'src/schema/a.ts');

// const abc = new Set(['aaa', 'bbb', 'ccc', 'aaa']);
// console.log(Array.from(abc));
