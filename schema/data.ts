import { z } from 'https://deno.land/x/zod/mod.ts';

export const dataSchema = z.object({
  'ТипТраты': z.array(z.string()),
  'Сумма': z.array(z.number()),
  'ДоляНаСебя': z.array(z.number()),
  'Дата': z.array(z.string()),
  'Название': z.array(z.string()),
});

export type Data = z.infer<typeof dataSchema>;

//├─ Тип траты
//│  ├─ 0
//│  ├─ 1
//│  └─ 2
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
