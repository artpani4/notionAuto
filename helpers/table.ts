import Client from 'https://deno.land/x/notion_sdk@v2.2.3/src/Client.ts';
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
