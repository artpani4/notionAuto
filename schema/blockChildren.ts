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
});

export type Table = z.infer<typeof tableSchema>;


export const dbSchema = z.object({
  "object": z.string(),
  "id": z.string(),
  "cover": z.literal(null),
  "icon": z.literal(null),
  "created_time": z.string(),
  "created_by": z.object({
  "object": z.string(),
  "id": z.string()
}),
  "last_edited_by": z.object({
  "object": z.string(),
  "id": z.string()
}),
  "last_edited_time": z.string(),
  "title": z.array(z.object({
  "type": z.string(),
  "text": z.object({
  "content": z.string(),
  "link": z.literal(null)
}),
  "annotations": z.object({
  "bold": z.boolean(),
  "italic": z.boolean(),
  "strikethrough": z.boolean(),
  "underline": z.boolean(),
  "code": z.boolean(),
  "color": z.string()
}),
  "plain_text": z.string(),
  "href": z.literal(null)
})),
  "description": z.array(z.any()),
  "is_inline": z.boolean(),
  "properties": z.object({
  "Тип траты": z.object({
  "id": z.string(),
  "name": z.string(),
  "type": z.string(),
  "multi_select": z.object({
  "options": z.array(z.object({
  "id": z.string(),
  "name": z.string(),
  "color": z.string()
}))
})
}),
  "Сумма": z.object({
  "id": z.string(),
  "name": z.string(),
  "type": z.string(),
  "number": z.object({
  "format": z.string()
})
}),
  "Доля на себя": z.object({
  "id": z.string(),
  "name": z.string(),
  "type": z.string(),
  "number": z.object({
  "format": z.string()
})
}),
  "Дата": z.object({
  "id": z.string(),
  "name": z.string(),
  "type": z.string(),
  "date": z.object({
  
})
}),
  "Название": z.object({
  "id": z.string(),
  "name": z.string(),
  "type": z.string(),
  "title": z.object({
  
})
})
}),
  "parent": z.object({
  "type": z.string(),
  "page_id": z.string()
}),
  "url": z.string(),
  "archived": z.boolean()
})

export type Db = z.infer<typeof dbSchema>;

//├─ object
//├─ id
//├─ cover
//├─ icon
//├─ created_time
//├─ created_by
//│  ├─ object
//│  └─ id
//├─ last_edited_by
//│  ├─ object
//│  └─ id
//├─ last_edited_time
//├─ title
//│  └─ 0
//│     ├─ type
//│     ├─ text
//│     │  ├─ content
//│     │  └─ link
//│     ├─ annotations
//│     │  ├─ bold
//│     │  ├─ italic
//│     │  ├─ strikethrough
//│     │  ├─ underline
//│     │  ├─ code
//│     │  └─ color
//│     ├─ plain_text
//│     └─ href
//├─ description
//├─ is_inline
//├─ properties
//│  ├─ Тип траты
//│  │  ├─ id
//│  │  ├─ name
//│  │  ├─ type
//│  │  └─ multi_select
//│  │     └─ options
//│  │        ├─ 0
//│  │        │  ├─ id
//│  │        │  ├─ name
//│  │        │  └─ color
//│  │        └─ 1
//│  │           ├─ id
//│  │           ├─ name
//│  │           └─ color
//│  ├─ Сумма
//│  │  ├─ id
//│  │  ├─ name
//│  │  ├─ type
//│  │  └─ number
//│  │     └─ format
//│  ├─ Доля на себя
//│  │  ├─ id
//│  │  ├─ name
//│  │  ├─ type
//│  │  └─ number
//│  │     └─ format
//│  ├─ Дата
//│  │  ├─ id
//│  │  ├─ name
//│  │  ├─ type
//│  │  └─ date
//│  └─ Название
//│     ├─ id
//│     ├─ name
//│     ├─ type
//│     └─ title
//├─ parent
//│  ├─ type
//│  └─ page_id
//├─ url
//└─ archived
//