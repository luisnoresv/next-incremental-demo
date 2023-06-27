import Repositories from '@/components/about/Repositories';
import UserCard from '@/components/about/UserCard';
import { getUserInformatioFromGithub } from '@/services/githubApi';
import { Suspense } from 'react';

export default async function AboutPage() {
  const userInformation = await getUserInformatioFromGithub('luisnoresv');

  return (
    <div className='container mr-auto ml-auto flex mt-10'>
      <aside className='w-1/4'><UserCard userInformation={userInformation} /></aside>
      <section className='w-3/4'>
        <Suspense fallback={<div>Loading...</div>}>
          {/* @ts-expect-error Server Component */}
          <Repositories username={userInformation.login} />
        </Suspense>
      </section>
    </div>
  );
}

