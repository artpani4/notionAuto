import { Client } from 'https://deno.land/x/notion_sdk/src/mod.ts';

import { generateSchema } from '../schema/generator.ts';

import { extractDbs, getAllDatabases } from '../helpers/table.ts';
import { Blocks } from '../schema/blocks.ts';
import { Row } from '../schema/row.ts';

const notion = new Client({
  auth: 'secret_6FjltgRbA8Ma61mAimwalGan3Y1rjXs9sqCgknlg6Bs',
});

const pageId = '2e79c94c8a7d4c319f0ee19582568e77';
const response = await notion.blocks.children.list({
  block_id: pageId,
  page_size: 50,
}) as Blocks;

const tables: Row[] = await extractDbs<Blocks, Row>(response);

// generateSchema(response, 'blocks', 'schema/blocks.ts');

// const tables: Table[] = response.results.filter((t) =>
//   t.type == 'child_database'
// ) as Table[];

// const dbs = await getAllDatabases(notion, tables);

// const art = await notion.databases.query({
//   database_id: dbs[0].id,
// });

// const summ = (art.results as Row[]).map((t) =>
//   t.properties.Сумма.number
// );
// console.log(summ);

// const date = (art.results as Row[]).map((t) =>
//   t.properties.Дата.date
// );
// console.log(date);

// const type = (art.results as Row[]).map((t) =>
//   t.properties['Тип траты'].multi_select
// );
// console.log(type);

// const ratio = (art.results as Row[]).map((t) =>
//   t.properties['Доля на себя'].number
// );
// console.log(ratio);

// const name = (art.results as Row[]).map((t) =>
//   t.properties.Название.title[0].plain_text
// );
// console.log(name);

// generateSchema(art.results[1], 'row', 'schema/row.ts');
