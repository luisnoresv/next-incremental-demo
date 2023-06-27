import {
  FollowersIcon, LocationIcon,
  OrganizationIcon, ResourceLinkIcon, TwitterIcon
} from '@/components/ui/icons';


export default function UserSkeletonCard() {
  return (
    <>
      <div className='border border-purple-300 bg-slate-400 rounded-full w-[16em] h-[16em]' />

      <section className='w-full py-3'>
        <h1 className='space-y-2'>
          <span className='rounded-xl bg-slate-400 block w-2/3 h-5' />
          <span className='rounded-xl bg-slate-400 block w-1/3 h-5' />
        </h1>
      </section>
      <div className='w-full border border-slate-400' />
      <article className='flex flex-col mt-2'>
        <div className='grid grid-cols-3 gap-1'>
          <span className='rounded bg-slate-400 h-2 col-span-2' />
          <span className='rounded bg-slate-400 h-2 col-span-1' />
          <span className='rounded bg-slate-400 h-2 col-span-1' />
          <span className='rounded bg-slate-400 h-2 col-span-1' />
          <span className='rounded bg-slate-400 h-2 col-span-1' />
          <span className='rounded bg-slate-400 h-2 col-span-1' />
          <span className='rounded bg-slate-400 h-2 col-span-1' />
          <span className='rounded bg-slate-400 h-2 col-span-1' />
          <span className='rounded bg-slate-400 h-2 col-span-1' />
          <span className='rounded bg-slate-400 h-2 col-span-2' />
        </div>
        <div className='w-full border border-slate-400 mt-2' />
        <div className='flex mt-2 mb-3 items-center font-inter text-sm tracking-wider'>
          <FollowersIcon /> <span className='rounded-xl bg-slate-400 block w-24 h-2' />
          |
          <span className='rounded-xl bg-slate-400 block w-24 h-2' />
        </div>
        <ul className='list-none'>
          <li className='items-center text-sm pt-1 flex' aria-label={`Organization`}>
            <OrganizationIcon /><span className='ml-2 rounded-xl bg-slate-400 block w-24 h-3' />
          </li>
          <li className='items-center text-sm pt-1 flex' aria-label={`Location`}>
            <LocationIcon /><span className='ml-1 rounded-xl bg-slate-400 block w-24 h-3' />
          </li>
          <li className='items-center text-sm pt-1 flex' aria-label={`Blog`}>
            <ResourceLinkIcon /><span className='ml-1 rounded-xl bg-slate-400 block w-24 h-3' />
          </li>
          <li className='items-center text-sm pt-1 flex' aria-label={`Twitter`}>
            <TwitterIcon /><span className='rounded-xl bg-slate-400 block w-24 h-3' />
          </li>
        </ul>
      </article>
    </>
  );
}