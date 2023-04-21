import { z } from 'https://deno.land/x/zod/mod.ts';

export const rowSchema = z.object({
  object: z.string(),
  id: z.string(),
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
  cover: z.literal(null),
  icon: z.literal(null),
  parent: z.object({
  type: z.string(),
  database_id: z.string()
}),
  archived: z.boolean(),
  properties: z.object({
  "Тип траты": z.object({
  id: z.string(),
  type: z.string(),
  multi_select: z.array(z.object({
  id: z.string(),
  name: z.string(),
  color: z.string()
}))
}),
  Сумма: z.object({
  id: z.string(),
  type: z.string(),
  number: z.number()
}),
  "Доля на себя": z.object({
  id: z.string(),
  type: z.string(),
  number: z.number()
}),
  Дата: z.object({
  id: z.string(),
  type: z.string(),
  date: z.object({
  start: z.string(),
  end: z.literal(null),
  time_zone: z.literal(null)
})
}),
  Название: z.object({
  id: z.string(),
  type: z.string(),
  title: z.array(z.object({
  type: z.string(),
  text: z.object({
  content: z.string(),
  link: z.literal(null)
}),
  annotations: z.object({
  bold: z.boolean(),
  italic: z.boolean(),
  strikethrough: z.boolean(),
  underline: z.boolean(),
  code: z.boolean(),
  color: z.string()
}),
  plain_text: z.string(),
  href: z.literal(null)
}))
})
}),
  url: z.string()
})

export type Row = z.infer<typeof rowSchema>;

//├─ object
//├─ id
//├─ created_time
//├─ last_edited_time
//├─ created_by
//│  ├─ object
//│  └─ id
//├─ last_edited_by
//│  ├─ object
//│  └─ id
//├─ cover
//├─ icon
//├─ parent
//│  ├─ type
//│  └─ database_id
//├─ archived
//├─ properties
//│  ├─ Тип траты
//│  │  ├─ id
//│  │  ├─ type
//│  │  └─ multi_select
//│  │     └─ 0
//│  │        ├─ id
//│  │        ├─ name
//│  │        └─ color
//│  ├─ Сумма
//│  │  ├─ id
//│  │  ├─ type
//│  │  └─ number
//│  ├─ Доля на себя
//│  │  ├─ id
//│  │  ├─ type
//│  │  └─ number
//│  ├─ Дата
//│  │  ├─ id
//│  │  ├─ type
//│  │  └─ date
//│  │     ├─ start
//│  │     ├─ end
//│  │     └─ time_zone
//│  └─ Название
//│     ├─ id
//│     ├─ type
//│     └─ title
//│        └─ 0
//│           ├─ type
//│           ├─ text
//│           │  ├─ content
//│           │  └─ link
//│           ├─ annotations
//│           │  ├─ bold
//│           │  ├─ italic
//│           │  ├─ strikethrough
//│           │  ├─ underline
//│           │  ├─ code
//│           │  └─ color
//│           ├─ plain_text
//│           └─ href
//└─ url
//