import { notion2 } from '@/lib/notion';
import Link from 'next/link';

export default async function Home() {
  let data;

  try {
    if (!process.env.NOTION_DATABASE_ID) {
      throw new Error('데이터베이스 아이디가 없습니다.');
    }

    const db = await notion2.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    console.log(db);
    data = db.results;
  } catch (error) {
    console.error('Notion API 호출 실패:', error);
    return (
      <main>
        <p>데이터를 가져오는 데 실패했습니다. 잠시 후 다시 시도해주세요.</p>
        <Link href="/about">About</Link>
      </main>
    );
  }

  console.log(data);

  return (
    <main>
      <p>필터링 아이디: </p>
      {/* {filteredResults.map((result: any) => (
        <>
          <p>{result.id}</p>
        </>
      ))} */}
      <Link href="/about">About</Link>
    </main>
  );
}
