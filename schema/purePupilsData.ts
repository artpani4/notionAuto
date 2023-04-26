import { z } from 'https://deno.land/x/zod/mod.ts';

export const purePupilsDataSchema = z.object({
  Расписание: z.array(z.any()),
  "Доход за день": z.array(z.literal(null)),
  День: z.array(z.string())
})

export type PurePupilsData = z.infer<typeof purePupilsDataSchema>;

//├─ Расписание
//├─ Доход за день
//│  ├─ 0
//│  ├─ 1
//│  ├─ 2
//│  ├─ 3
//│  ├─ 4
//│  ├─ 5
//│  └─ 6
//└─ День
//   ├─ 0
//   ├─ 1
//   ├─ 2
//   ├─ 3
//   ├─ 4
//   ├─ 5
//   └─ 6
//