import { notion2 } from '@/lib/notion';
import Link from 'next/link';

export default async function Home() {
  const db: any = await notion2.databases.query({
    database_id: process.env.NOTION_PORTFOLIO_DATABASE_ID!,
  });

  const data = db.results;
  const filteredResults = data.filter((result: any) => {
    const checkboxValue = result.properties['체크박스'].checkbox;
    return checkboxValue === true;
  });

  // 체크박스가 체크된 결과만 필터링
  console.log(filteredResults);

  return (
    <main>
      <p>필터링 아이디: </p>
      {filteredResults.map((result: any) => (
        <>
          <p>{result.id}</p>
        </>
      ))}
      <Link href="/about">About</Link>
    </main>
  );
}
