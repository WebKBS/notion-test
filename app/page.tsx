import Link from 'next/link';

export default async function Home() {
  const response = await fetch(
    `https://api.notion.com/v1/users/${process.env.NOTION_PAGE_ID}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NOTION_SECRET}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();

  console.log(data);
  // console.log(data.properties.image.files[0].file.url);
  // const location = data.properties['날짜'].date;
  // console.log(location);

  // const image = data.properties.image.files[0].file.url;
  return (
    <main>
      {/* <img src={image} alt="portfolio" width={200} height={200} /> */}
      <Link href="/about">About</Link>
    </main>
  );
}
