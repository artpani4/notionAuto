import { z } from 'https://deno.land/x/zod/mod.ts';

export const databaseConfigSchema = z.object({
  env: z.string(),
  apiKey: z.string(),
  pageId: z.string(),
});

export type DatabaseConfig = z.infer<typeof databaseConfigSchema>;

//├─ env
//├─ apiKey
//└─ pageId
//
