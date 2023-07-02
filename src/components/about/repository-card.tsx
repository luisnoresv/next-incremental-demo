import Link from 'next/link';

import { StarGazersIcon } from '@/components/ui/icons';
import { Repository } from '@/lib/models/repository';

type Props = {
  repository: Repository;
};

export default function RepositoryCard({ repository }: Props) {
  return (
    <section className='font-inter border border-gray-400 border-solid rounded-md flex p-4 w-full'>
      <div className='flex w-full flex-col'>
        <div className='flex w-full items-center relative'>
          <Link href={repository.url} className='font-bold flex-auto min-w-0 text-slate-500 hover:text-purple-400 hover:underline'>{repository.name}</Link>
          <span className='border border-gray-400 rounded-xl text-xs font-medium whitespace-nowrap text-gray-400 p-2'>
            Public
          </span>
        </div>
        <p className='flex-auto text-slate-500 text-sm block mt-2 mb-3'>{repository.description}</p>
        <aside className='flex'>
          {repository.language.length > 0 &&
            <p className='mb-0 text-xs text-blue-500'>
              <span>{repository.language}</span>
            </p>
          }
          {repository.stargazersCount > 0 &&
            <Link href={repository.stargazersUrl} className='ml-4 text-sm hover:text-purple-400'>
              <div className='flex gap-1'>
                <StarGazersIcon height='18' width='18' />
                {repository.stargazersCount}
              </div>
            </Link>
          }
        </aside>
      </div>
    </section>
  );
}