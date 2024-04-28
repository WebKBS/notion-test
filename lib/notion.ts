import { Client } from '@notionhq/client';
import { NotionAPI } from 'notion-client';

export const notion = new NotionAPI();

export async function getData(rootPageId: string) {
  return await notion.getPage(rootPageId);
}

// export const getDb = async () => {
//   const response = await fetch(
//     `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.NOTION_SECRET}`,
//         'Notion-Version': '2022-06-28',
//         'Content-Type': 'application/json',
//       },
//     }
//   );
//   return await response.json();
// };

export const notion2 = new Client({
  auth: process.env.NOTION_SECRET,
});
