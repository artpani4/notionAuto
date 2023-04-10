import { z } from 'https://deno.land/x/zod/mod.ts';

export const aSchema = z.object({
  b: z.number(),
  c: z.number(),
  d: z.array(z.union([
    z.object({
      e: z.number(),
      f: z.number(),
    }),
    z.object({
      e: z.number(),
      h: z.number(),
    }),
  ])),
});

export type A = z.infer<typeof aSchema>;
