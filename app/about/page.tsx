import { Renderer } from '@/components/notion';
import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'react-notion-x/src/styles.css';
import { notion } from '../../lib/notion';

const pageId = process.env.NOTION_PAGE_ID as string;

async function getData(rootPageId: string) {
  try {
    return await notion.getPage(rootPageId);
  } catch (error) {
    console.error('Notion API 호출 실패:', error);
    throw error;
  }
}

const About = async () => {
  let data;

  try {
    data = await getData(pageId);
  } catch (error) {
    console.error('getData 함수 실패:', error);
    return (
      <div>Notion API 호출에 실패했습니다. 잠시 후 다시 시도해주세요.</div>
    );
  }

  return <Renderer recordMap={data} rootPageId={pageId} />;
};

export default About;
