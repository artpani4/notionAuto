import { z } from 'https://deno.land/x/zod/mod.ts';

export const configSchema = z.object({
  env: z.string(),
  telegram: z.object({
    botToken: z.string(),
    chatId: z.string(),
  }),
  database: z.object({
    host: z.string(),
    port: z.number(),
    database: z.string(),
    username: z.string(),
    password: z.string(),
  }),
});

export type Config = z.infer<typeof configSchema>;

export function getSchema(obj: any) {
  const schemaDef: any = {};
  if (obj === null || obj === undefined) {
    return z.literal(null);
  }
  try {
    for (const [key, value] of Object.entries(obj)) {
      switch (typeof value) {
        case 'string':
          schemaDef[key] = z.string();
          break;
        case 'number':
          schemaDef[key] = z.number();
          break;
        case 'boolean':
          schemaDef[key] = z.boolean();
          break;
        case 'object':
          if (Array.isArray(value)) {
            const arraySchema = getSchema(value[0]);
            schemaDef[key] = z.array(arraySchema);
          } else {
            const objectSchema = getSchema(value);
            schemaDef[key] = objectSchema;
          }
      }
    }
  } catch (e) {
    console.log(e);
  }
  const schema = z.object(schemaDef);
  return schema;
}
