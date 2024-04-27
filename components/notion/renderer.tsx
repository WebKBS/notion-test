'use client';

import Link from 'next/link';
import { NotionRenderer } from 'react-notion-x';

interface NotionPageProps {
  recordMap: any;
  rootPageId: string;
}

export const NotionPage = ({ recordMap, rootPageId }: NotionPageProps) => {
  return (
    <div className="notion__container">
      <Link href="/">뒤로가기</Link>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        rootPageId={rootPageId}
        previewImages
      />
    </div>
  );
};
