import {Inter} from 'next/font/google';
import type {Metadata} from 'next';
import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Generate Api | Home',
  description: 'Free & oprn-source api',
};

export default function Home() {
  return (
    <div className='relative flex h-screen items-center justify-center overflow-x-hidden'>
      <div className='container mx-auto h-full w-full max-w-7xl pt-32'>
        <div className='flex h-full flex-col items-center justify-start gap-6 lg:items-start lg:justify-center'>
          <LargeHeading size='lg' className='threed text-black dark:text-light-gold'>
            Easily determine <br /> text sumilarity{' '}
          </LargeHeading>
          <Paragraph className='max-w-xl lg:text-left'>
            With the Text Similarity API, you can easily determine the similarity between two pieces of text with a free{' '}
            <Link href='/login' className='text-black underline underline-offset-2 dark:text-light-gold'>
              API key
            </Link>
            .
          </Paragraph>

          <div className='relative aspect-square w-full max-w-xl lg:absolute lg:left-1/2 lg:max-w-3xl'>
            <Image
              priority
              className='img-shadow '
              quality={100}
              style={{objectFit: 'contain'}}
              fill
              src='/typewriter.webp'
              alt='typewriter'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
