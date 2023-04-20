import { Client } from 'https://deno.land/x/notion_sdk/src/mod.ts';
import { BlockChildren, Table } from '../schema/blockChildren.ts';
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

// generateSchema(
//   tables[0],
//   'table',
//   'schema/blockChildren.ts',
// );
