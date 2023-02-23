import { Client } from 'https://deno.land/x/notion_sdk/src/mod.ts';
import {
  PageObjectResponse,
  RichTextItemResponse,
} from 'https://deno.land/x/notion_sdk/src/api-endpoints.ts';
import { getTimesAsStringFromDay } from '../helpers/getters.ts';

const notion = new Client({
  auth: 'secret_hquSEuz6NKJz2vDus4E0bD39ANSQ804Phv5Q9ukLU0U',
});

const pageId = 'a5e52fe49723421ea8a0ae1bb3b6da44';
const databaseId = '884b0b9d2256488fb7d96411fe265535';

const response = await notion.databases.query({
  database_id: databaseId,
});

response.results.forEach((item) => {
  console.log(getTimesAsStringFromDay(item as PageObjectResponse));
});
// https://www.notion.so/artpani/884b0b9d2256488fb7d96411fe265535?v=caf597272cf641dfa19600d74c554bd6
