import Client from 'https://deno.land/x/notion_sdk@v2.2.3/src/Client.ts';
import { Iblocks } from '../notionDb/blocks.ts';
import { Trow } from '../notionDb/rowSchema.ts';
import { generateSchema } from '../schema/generator.ts';

export async function getDatabasesInfo<
  T extends { results: { type: string; id: string }[] },
>(
  client: Client,
  pageRetrieveResults: T,
) {
  const tables = await extractDbs<T>(pageRetrieveResults);
  const pureDbsList = await Promise.all(tables.map(async (t) => {
    const response = await client.databases.query({
      database_id: t.id,
    });
    return response;
  }));
  return pureDbsList;
}

export function extractDbs<
  T extends { results: { type: string; id: string }[] },
>(blocks: T): { type: string; id: string }[] {
  const tables = blocks.results.filter((t) =>
    t.type === 'child_database'
  );
  return tables;
}

export async function devGetBlocks(
  client: Client,
  pageId: string,
  schemaPath: string,
) {
  const response = await client.blocks.children.list({
    block_id: pageId,
  });
  generateSchema(response, 'blocks', schemaPath);
}

export function extractData<
  T extends Trow,
>(
  results: T[],
) {
  const properties: { [key: string]: any[] } = {};
  (results).forEach((row) =>
    Object.entries(row.properties).forEach(([key, value]) => {
      if (!properties[key]) properties[key] = [];
      if (value !== undefined) {
        if (value.type === 'number') {
          properties[key].push((value as { number: number }).number);
        } else if (value.type === 'multi_select') {
          properties[key].push(
            (value as { multi_select: { name: string }[] })
              .multi_select.map((ms) => ms.name),
          );
        } else if (value.type === 'date') {
          properties[key].push(
            (value as { date: { start: string } }).date.start,
          );
        } else if (value.type === 'title') {
          properties[key].push(
            (value as { title: { plain_text: string }[] }).title[0]
              .plain_text,
          );
        } else if (value.type === 'url') {
          properties[key].push(
            (value as { url: string }).url,
          );
        } else if (value.type === 'files') {
          properties[key].push(
            [(value as {
              files: {
                type: string;
                name: string;
                file: {
                  url: string;
                  expiry_time: string;
                };
              }[];
            }).files.map((f) => f.file.url)],
          );
        } else if (value.type === 'multi_select') {
          properties[key].push([
            (value as { multi_select: { name: string }[] })
              .multi_select
              .map((n) => n.name),
          ]);
        } else if (value.type === 'people') {
          properties[key].push([
            (value as { people: { id: string }[] }).people.map((p) =>
              p.id
            ),
          ]);
        } else if (value.type === 'select') {
          properties[key].push(
            (value as { select: { name: string } }).select.name,
          );
        } else if (value.type === 'formula') {
          properties[key].push(
            (value as { formula: { string: string } }).formula.string,
          );
        } else if (value.type === 'checkbox') {
          properties[key].push(
            (value as { checkbox: boolean }).checkbox,
          );
        } else if (value.type === 'email') {
          properties[key].push(
            (value as { email: string }).email,
          );
        } else if (value.type === 'status') {
          properties[key].push(
            (value as { status: { name: string } }).status.name,
          );
        } else if (value.type === 'rich_text') {
          properties[key].push(
            (value as { rich_text: { plain_text: string }[] })
              .rich_text.map((rt) => rt.plain_text),
          );
        }
      }
    })
  );
  return properties;
}

export async function getDbsListByPage(
  client: Client,
  pageId: string,
) {
  const response = await client.blocks.children.list({
    block_id: pageId,
  }) as Iblocks;

  const dbsList = await getDatabasesInfo<Iblocks>(
    client,
    response,
  );
  return dbsList;
}
