import { Client } from 'https://deno.land/x/notion_sdk/src/mod.ts';

import { generateSchema } from '../schema/generator.ts';

import { extractDbs, getDatabasesInfo } from '../helpers/table.ts';
import { Blocks } from '../schema/blocks.ts';
import { Row } from '../schema/row.ts';
import { Data } from '../schema/data.ts';

const notion = new Client({
  auth: 'secret_6FjltgRbA8Ma61mAimwalGan3Y1rjXs9sqCgknlg6Bs',
});

const pageId = '2e79c94c8a7d4c319f0ee19582568e77';

// Получили response - сгенерировали схему, получили Blocks
const response = await notion.blocks.children.list({
  block_id: pageId,
}) as Blocks;

const dbsList = await getDatabasesInfo<Blocks>(
  notion,
  response,
);

// generateSchema(dbsList[0].results[0], 'row', 'schema/row.ts');
const properties: { [key: string]: any[] } = {};
(dbsList[0].results as Row[]).forEach((row) =>
  Object.entries(row.properties).forEach(([key, value]) => {
    if (value.type === 'number') {
      if (!properties[key]) properties[key] = [];
      properties[key].push((value as { number: number }).number);
    } else if (value.type === 'multi_select') {
      if (!properties[key]) properties[key] = [];
      properties[key].push(
        (value as { multi_select: { name: string }[] })
          .multi_select[0].name,
      );
    } else if (value.type === 'date') {
      if (!properties[key]) properties[key] = [];
      properties[key].push(
        (value as { date: { start: string } }).date.start,
      );
    } else if (value.type === 'title') {
      if (!properties[key]) properties[key] = [];
      properties[key].push(
        (value as { title: { plain_text: string }[] }).title[0]
          .plain_text,
      );
    }
  })
);

const newData = properties as Data;

// generateSchema(properties, 'data', 'schema/data.ts');
