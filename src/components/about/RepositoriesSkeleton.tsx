import { StarGazersIcon } from '../ui/icons';

function RepositorySkeletonCard() {
  return (
    <section className='font-inter border border-gray-400 border-solid rounded-md flex p-4 w-full'>
      <div className='flex w-full flex-col'>
        <div className='grid grid-cols-3 gap-x-40'>
          <span className='bg-slate-400 rounded h-2 col-span-2' />
          <span className='bg-slate-400 rounded-2xl w-10 h-6 col-span-1'>
          </span>
        </div>
        <span className='bg-slate-400 rounded h-2 mt-6 mb-3 w-10/12' />
        <aside className='flex mt-5'>
          <span className='bg-slate-400 rounded h-2 w-20 mt-1' />
          <div className='flex gap-1'>
            <StarGazersIcon height='18' width='18' />
          </div>
        </aside>
      </div>
    </section>
  );
}

export default function RepositoriesSkeleton() {
  return (
    <article className='ml-6'>
      <div className='mb-2 ml-2 w-40 h-4 bg-slate-400 rounded' />
      <ol className='flex flex-wrap list-none mb-4'>
        <li className='mb-3 flex content-stretch w-1/2 pr-2 pl-2'>
          <RepositorySkeletonCard />
        </li>
        <li className='mb-3 flex content-stretch w-1/2 pr-2 pl-2'>
          <RepositorySkeletonCard />
        </li>
        <li className='mb-3 flex content-stretch w-1/2 pr-2 pl-2'>
          <RepositorySkeletonCard />
        </li>
        <li className='mb-3 flex content-stretch w-1/2 pr-2 pl-2'>
          <RepositorySkeletonCard />
        </li>
        <li className='mb-3 flex content-stretch w-1/2 pr-2 pl-2'>
          <RepositorySkeletonCard />
        </li>
      </ol>
    </article >
  );
}

