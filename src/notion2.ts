import { Client } from 'https://deno.land/x/notion_sdk/src/mod.ts';

import { generateSchema } from '../schema/generator.ts';

import {
  extractData,
  extractDbs,
  getDatabasesInfo,
  TrowProp,
} from '../helpers/table.ts';
import { Blocks } from '../schema/blocks.ts';
import { Row } from '../schema/row.ts';
import { TestDbPageBlocks } from '../schema/testDbPageBlocks.ts';
import { TestRow } from '../schema/testRow.ts';

const notion = new Client({
  auth: 'secret_6FjltgRbA8Ma61mAimwalGan3Y1rjXs9sqCgknlg6Bs',
});

const pageId = '0754179c355d4528856cc46aadc4b59c';

// Получили response - сгенерировали схему, получили Blocks
const response = await notion.blocks.children.list({
  block_id: pageId,
}) as TestDbPageBlocks;

const dbsList = await getDatabasesInfo<TestDbPageBlocks>(
  notion,
  response,
);

// generateSchema(dbsList[0].results[0], 'testRow', 'schema/testRow.ts');
const myData = extractData(dbsList[0].results as TrowProp[]);
console.log(myData);
