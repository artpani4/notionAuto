import { z } from 'https://deno.land/x/zod/mod.ts';

export const blocksSchema = z.object({
  object: z.string(),
  results: z.array(z.union([z.object({
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
  paragraph: z.object({
  rich_text: z.array(z.any()),
  color: z.string()
})
}),z.object({
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
})])),
  next_cursor: z.literal(null),
  has_more: z.boolean(),
  type: z.string(),
  block: z.object({
  
})
})

export type Blocks = z.infer<typeof blocksSchema>;

//├─ object
//├─ results
//│  ├─ 0
//│  │  ├─ object
//│  │  ├─ id
//│  │  ├─ parent
//│  │  │  ├─ type
//│  │  │  └─ page_id
//│  │  ├─ created_time
//│  │  ├─ last_edited_time
//│  │  ├─ created_by
//│  │  │  ├─ object
//│  │  │  └─ id
//│  │  ├─ last_edited_by
//│  │  │  ├─ object
//│  │  │  └─ id
//│  │  ├─ has_children
//│  │  ├─ archived
//│  │  ├─ type
//│  │  └─ paragraph
//│  │     ├─ rich_text
//│  │     └─ color
//│  ├─ 1
//│  │  ├─ object
//│  │  ├─ id
//│  │  ├─ parent
//│  │  │  ├─ type
//│  │  │  └─ page_id
//│  │  ├─ created_time
//│  │  ├─ last_edited_time
//│  │  ├─ created_by
//│  │  │  ├─ object
//│  │  │  └─ id
//│  │  ├─ last_edited_by
//│  │  │  ├─ object
//│  │  │  └─ id
//│  │  ├─ has_children
//│  │  ├─ archived
//│  │  ├─ type
//│  │  └─ child_database
//│  │     └─ title
//│  └─ 2
//│     ├─ object
//│     ├─ id
//│     ├─ parent
//│     │  ├─ type
//│     │  └─ page_id
//│     ├─ created_time
//│     ├─ last_edited_time
//│     ├─ created_by
//│     │  ├─ object
//│     │  └─ id
//│     ├─ last_edited_by
//│     │  ├─ object
//│     │  └─ id
//│     ├─ has_children
//│     ├─ archived
//│     ├─ type
//│     └─ child_database
//│        └─ title
//├─ next_cursor
//├─ has_more
//├─ type
//└─ block
//