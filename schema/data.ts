import { z } from 'https://deno.land/x/zod/mod.ts';

export const dataSchema = z.object({
  'Тип траты': z.array(z.array(z.string())),
  Сумма: z.array(z.number()),
  'Доля на себя': z.array(z.number()),
  Дата: z.array(z.string()),
  Название: z.array(z.string()),
});

export type Data = z.infer<typeof dataSchema>;

//├─ Тип траты
//│  ├─ 0
//│  │  └─ 0
//│  ├─ 1
//│  │  └─ 0
//│  └─ 2
//│     └─ 0
//├─ Сумма
//│  ├─ 0
//│  ├─ 1
//│  └─ 2
//├─ Доля на себя
//│  ├─ 0
//│  ├─ 1
//│  └─ 2
//├─ Дата
//│  ├─ 0
//│  ├─ 1
//│  └─ 2
//└─ Название
//   ├─ 0
//   ├─ 1
//   └─ 2
//
