import Client from 'https://deno.land/x/notion_sdk@v2.2.3/src/Client.ts';

export async function getAllDatabases<T extends { id: string }>(
  client: Client,
  databases: T[],
) {
  const results = await Promise.all(databases.map(async (t) => {
    const response = await client.databases.retrieve({
      database_id: t.id,
    });
    return response;
  }));
  return results;
}

export async function extractDbs<
  T extends { results: { type: string }[] },
  U,
>(blocks: T) {
  const tables: U[] = blocks.results.filter((t) =>
    t.type == 'child_database'
  ) as U[];
  return tables;
}
