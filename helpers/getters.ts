import { PageObjectResponse } from 'https://deno.land/x/notion_sdk@v2.2.3/src/api-endpoints.ts';
const timeRegex =
  /^([01]?[0-9]|2[0-3]):[0-5][0-9]-([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
export function getTimesAsStringFromDay(
  dayprops: PageObjectResponse,
): string[] | null {
  const day0props = (dayprops).properties;

  const dayName = day0props['День'].type == 'title'
    ? day0props['День'].title[0].plain_text
    : '';

  // console.log(timeRegex.test('19:00-20:00'));
  if (day0props['Расписание'].type === 'rich_text') {
    const schedule = day0props['Расписание'].rich_text;
    const intervals = schedule
      .map((item) => {
        if (item.type === 'text') {
          const text = item.plain_text.trim();
          if (timeRegex.test(text)) {
            return text;
          }
        }
        return null;
      })
      .filter((item) => item !== null) as string[];

    return [dayName].concat(intervals);
  }
  return null;
}
