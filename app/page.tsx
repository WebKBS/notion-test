import Link from 'next/link';

let cachedData: any = null;
let cacheExpirationTime: any = null;
export default async function Home() {
  const cacheDuration = 10;

  async function fetchData() {
    // 만료 시간이 지나지 않았고 캐시된 데이터가 있는 경우 캐시된 데이터를 반환
    if (cachedData && cacheExpirationTime && Date.now() < cacheExpirationTime) {
      return cachedData;
    }

    // Notion API 호출
    const response = await fetch(
      `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NOTION_SECRET}`,
          'Notion-Version': '2021-05-13',
        },
      }
    );

    const data = await response.json();

    // 캐시 업데이트
    cachedData = data;
    cacheExpirationTime = Date.now() + cacheDuration;

    return data;
  }

  // fetchData 함수를 사용하여 데이터를 가져옴
  fetchData()
    .then((data) => {
      console.log(data);
      // 여기서부터 데이터를 사용하여 홈페이지를 렌더링하거나 다른 작업을 수행할 수 있습니다.
    })
    .catch((error) => console.error(error));

  // let data;

  // try {
  //   if (!process.env.NOTION_DATABASE_ID) {
  //     throw new Error('데이터베이스 아이디가 없습니다.');
  //   }

  //   const db = await notion2.databases.query({
  //     database_id: process.env.NOTION_DATABASE_ID,
  //   });

  //   console.log(db);ㄴ
  //   data = db.results;
  // } catch (error) {
  //   console.error('Notion API 호출 실패:', error);
  //   return (
  //     <main>
  //       <p>데이터를 가져오는 데 실패했습니다. 잠시 후 다시 시도해주세요.</p>
  //       <Link href="/about">About</Link>
  //     </main>
  //   );
  // }

  // console.log(data);

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
