import { z } from 'https://deno.land/x/zod/mod.ts';

export const databaseConfigSchema = z.object({
  name: z.string(),
  secrets: z.array(z.object({
  name: z.string(),
  value: z.string()
})),
  pageId: z.string()
})

export type DatabaseConfig = z.infer<typeof databaseConfigSchema>;

//├─ name
//├─ secrets
//│  └─ 0
//│     ├─ name
//│     └─ value
//└─ pageId
//