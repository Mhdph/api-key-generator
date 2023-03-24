import React from 'react';

import type {Metadata} from 'next';
import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import DocumentationTabs from '@/components/DocumentationTabs';

export const metadata: Metadata = {
  title: 'Generate Api | Documention',
  description: 'Free & oprn-source api',
};

const Documentation: React.FC = () => {
  return (
    <div className='container mx-auto mt-12 max-w-7xl'>
      <div className='flex flex-col items-center gap-6'>
        <LargeHeading>Making a request</LargeHeading>
        <Paragraph>api/v1/similarity</Paragraph>

        <DocumentationTabs />
      </div>
    </div>
  );
};
export default Documentation;
