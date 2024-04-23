export default function Home() {
  fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_PORTFOLIO_DATABASE_ID}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NOTION_SECRET}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  return <main></main>;
}
