import { z } from 'https://deno.land/x/zod/mod.ts';

export const testRowSchema = z.object({
  object: z.string(),
  id: z.string(),
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
  cover: z.literal(null),
  icon: z.literal(null),
  parent: z.object({
    type: z.string(),
    database_id: z.string(),
  }),
  archived: z.boolean(),
  properties: z.object({
    URL: z.object({
      id: z.string(),
      type: z.string(),
      url: z.string(),
    }).optional(),
    'Files & media': z.object({
      id: z.string(),
      type: z.string(),
      files: z.array(z.object({
        name: z.string(),
        type: z.string(),
        file: z.object({
          url: z.string(),
          expiry_time: z.string(),
        }),
      })),
    }).optional(),
    'Multi-select': z.object({
      id: z.string(),
      type: z.string(),
      multi_select: z.array(z.object({
        id: z.string(),
        name: z.string(),
        color: z.string(),
      })),
    }).optional(),
    Phone: z.object({
      id: z.string(),
      type: z.string(),
      phone_number: z.string(),
    }).optional(),
    Date: z.object({
      id: z.string(),
      type: z.string(),
      date: z.object({
        start: z.string(),
        end: z.literal(null),
        time_zone: z.literal(null),
      }),
    }).optional(),
    Person: z.object({
      id: z.string(),
      type: z.string(),
      people: z.array(z.object({
        object: z.string(),
        id: z.string(),
      })),
    }).optional(),
    Select: z.object({
      id: z.string(),
      type: z.string(),
      select: z.object({
        id: z.string(),
        name: z.string(),
        color: z.string(),
      }),
    }).optional(),
    Rollup: z.object({
      id: z.string(),
      type: z.string(),
      rollup: z.object({
        type: z.string(),
        array: z.array(z.any()),
        function: z.string(),
      }),
    }).optional(),
    Formula: z.object({
      id: z.string(),
      type: z.string(),
      formula: z.object({
        type: z.string(),
        string: z.string(),
      }),
    }).optional(),
    Checkbox: z.object({
      id: z.string(),
      type: z.string(),
      checkbox: z.boolean(),
    }).optional(),
    Number: z.object({
      id: z.string(),
      type: z.string(),
      number: z.number(),
    }).optional(),
    Email: z.object({
      id: z.string(),
      type: z.string(),
      email: z.string(),
    }).optional(),
    Status: z.object({
      id: z.string(),
      type: z.string(),
      status: z.object({
        id: z.string(),
        name: z.string(),
        color: z.string(),
      }),
    }).optional(),
    Name: z.object({
      id: z.string(),
      type: z.string(),
      title: z.array(z.object({
        type: z.string(),
        text: z.object({
          content: z.string(),
          link: z.literal(null),
        }),
        annotations: z.object({
          bold: z.boolean(),
          italic: z.boolean(),
          strikethrough: z.boolean(),
          underline: z.boolean(),
          code: z.boolean(),
          color: z.string(),
        }),
        plain_text: z.string(),
        href: z.literal(null),
      })),
    }).optional(),
  }),
  url: z.string(),
});

export type TestRow = z.infer<typeof testRowSchema>;

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
//│  ├─ URL
//│  │  ├─ id
//│  │  ├─ type
//│  │  └─ url
//│  ├─ Files & media
//│  │  ├─ id
//│  │  ├─ type
//│  │  └─ files
//│  │     └─ 0
//│  │        ├─ name
//│  │        ├─ type
//│  │        └─ file
//│  │           ├─ url
//│  │           └─ expiry_time
//│  ├─ Multi-select
//│  │  ├─ id
//│  │  ├─ type
//│  │  └─ multi_select
//│  │     ├─ 0
//│  │     │  ├─ id
//│  │     │  ├─ name
//│  │     │  └─ color
//│  │     └─ 1
//│  │        ├─ id
//│  │        ├─ name
//│  │        └─ color
//│  ├─ Phone
//│  │  ├─ id
//│  │  ├─ type
//│  │  └─ phone_number
//│  ├─ Date
//│  │  ├─ id
//│  │  ├─ type
//│  │  └─ date
//│  │     ├─ start
//│  │     ├─ end
//│  │     └─ time_zone
//│  ├─ Person
//│  │  ├─ id
//│  │  ├─ type
//│  │  └─ people
//│  │     ├─ 0
//│  │     │  ├─ object
//│  │     │  └─ id
//│  │     └─ 1
//│  │        ├─ object
//│  │        └─ id
//│  ├─ Select
//│  │  ├─ id
//│  │  ├─ type
//│  │  └─ select
//│  │     ├─ id
//│  │     ├─ name
//│  │     └─ color
//│  ├─ Rollup
//│  │  ├─ id
//│  │  ├─ type
//│  │  └─ rollup
//│  │     ├─ type
//│  │     ├─ array
//│  │     └─ function
//│  ├─ Formula
//│  │  ├─ id
//│  │  ├─ type
//│  │  └─ formula
//│  │     ├─ type
//│  │     └─ string
//│  ├─ Checkbox
//│  │  ├─ id
//│  │  ├─ type
//│  │  └─ checkbox
//│  ├─ Number
//│  │  ├─ id
//│  │  ├─ type
//│  │  └─ number
//│  ├─ Email
//│  │  ├─ id
//│  │  ├─ type
//│  │  └─ email
//│  ├─ Status
//│  │  ├─ id
//│  │  ├─ type
//│  │  └─ status
//│  │     ├─ id
//│  │     ├─ name
//│  │     └─ color
//│  └─ Name
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
