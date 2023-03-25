import React from 'react';
import type {Metadata} from 'next';
import {getServerSession} from 'next-auth';
import {authOptions} from '@/lib/auth';
import {db} from '@/lib/db';
import {notFound} from 'next/navigation';
import RequestApiKey from '@/components/RequestApiKey';
import ApiDashboard from '@/components/ApiDashboard';

export const metadata: Metadata = {
  title: 'Generate Api | Documention',
  description: 'Free & oprn-source api',
};
const page = async () => {
  const user = await getServerSession(authOptions);
  if (!user) return notFound();

  const apiKey = await db.apiKey.findFirst({
    where: {userId: user?.user.id, enabled: true},
  });

  return (
    <div className='mx-auto mt-16 max-w-7xl'>
      {apiKey ? (
        // @ts-expect-error Server Component
        <ApiDashboard />
      ) : (
        <RequestApiKey />
      )}
    </div>
  );
};
export default page;
