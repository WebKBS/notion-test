import { NotionPage } from '@/components/notion';
import { notion } from '../../lib/notion';

import 'react-notion-x/src/styles.css';

import 'prismjs/themes/prism-tomorrow.css';

import 'katex/dist/katex.min.css';

const pageId = process.env.NOTION_PAGE_ID as string;

async function getData(rootPageId: string) {
  return await notion.getPage(rootPageId);
}

const About = async () => {
  const data = await getData(pageId);
  return <NotionPage recordMap={data} rootPageId={pageId} />;
};

export default About;
