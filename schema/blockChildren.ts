import { z } from 'https://deno.land/x/zod/mod.ts';

export const blockChildrenSchema = z.object({
  object: z.string(),
  results: z.array(z.union([
    z.object({
      object: z.string(),
      id: z.string(),
      parent: z.object({
        type: z.string(),
        page_id: z.string(),
      }),
      created_time: z.string(),
      last_edited_time: z.string(),
      created_by: z.object({
        object: z.string(),
        id: z.string(),
      }),
      last_edited_by: z.object({
        object: z.string(),
        id: z.string(),
      }),
      has_children: z.boolean(),
      archived: z.boolean(),
      type: z.string(),
      paragraph: z.object({
        rich_text: z.array(z.any()),
        color: z.string(),
      }),
    }),
    z.object({
      object: z.string(),
      id: z.string(),
      parent: z.object({
        type: z.string(),
        page_id: z.string(),
      }),
      created_time: z.string(),
      last_edited_time: z.string(),
      created_by: z.object({
        object: z.string(),
        id: z.string(),
      }),
      last_edited_by: z.object({
        object: z.string(),
        id: z.string(),
      }),
      has_children: z.boolean(),
      archived: z.boolean(),
      type: z.string(),
      child_database: z.object({
        title: z.string(),
      }),
    }),
  ])),
  next_cursor: z.literal(null),
  has_more: z.boolean(),
  type: z.string(),
  block: z.object({}),
});

export type BlockChildren = z.infer<typeof blockChildrenSchema>;


export const tableSchema = z.object({
  object: z.string(),
  id: z.string(),
  parent: z.object({
  type: z.string(),
  page_id: z.string()
}),
  created_time: z.string(),
  last_edited_time: z.string(),
  created_by: z.object({
  object: z.string(),
  id: z.string()
}),
  last_edited_by: z.object({
  object: z.string(),
  id: z.string()
}),
  has_children: z.boolean(),
  archived: z.boolean(),
  type: z.string(),
  child_database: z.object({
  title: z.string()
})
})

export type Table = z.infer<typeof tableSchema>;