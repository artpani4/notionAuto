import { Client } from 'https://deno.land/x/notion_sdk/src/mod.ts';
import {
  BlockChildren,
  // Db,
  // dbSchema,
  Table,
} from '../schema/blockChildren.ts';
import { generateSchema } from '../schema/generator.ts';

const notion = new Client({
  auth: 'secret_6FjltgRbA8Ma61mAimwalGan3Y1rjXs9sqCgknlg6Bs',
});

// https://www.notion.so/artpani/Money-git-dev-2e79c94c8a7d4c319f0ee19582568e77?pvs=4
const pageId = '2e79c94c8a7d4c319f0ee19582568e77';
const response = await notion.blocks.children.list({
  block_id: pageId,
  page_size: 50,
}) as BlockChildren;

const tables: Table[] = response.results.filter((t) =>
  t.type == 'child_database'
) as Table[];

async function getAllDatabases(databases: Table[]) {
  const results = await Promise.all(databases.map(async (t) => {
    const response = await notion.databases.retrieve({
      database_id: t.id,
    });
    return response;
  }));
  return results;
}

const dbs = await getAllDatabases(tables);

generateSchema(
  dbs[0],
  'db',
  'schema/blockChildren.ts',
);
