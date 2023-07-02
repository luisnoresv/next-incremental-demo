import {
  FollowersIcon, LocationIcon,
  OrganizationIcon, ResourceLinkIcon, TwitterIcon
} from '@/components/ui/icons';
import { UserInformation } from '@/lib/models/user';
import Image from 'next/image';


interface Props {
  userInformation: UserInformation;
}

export default function UserCard({ userInformation }: Props) {
  return (
    <>
      <Image className='border border-purple-300 rounded-[50%] object-scale-down'
        src={userInformation?.avatarUrl || ""} alt="user image" width={260} height={260} />
      <section className='w-full py-3'>
        <h1 className='leading-none'>
          <span className='text-2xl overflow-hidden block'>{userInformation?.name}</span>
          <span className='text-xl font-light'>{userInformation?.login}</span>
        </h1>
      </section>
      <div className='w-full border border-slate-400' />
      <article className='flex flex-col mt-2'>
        <p className='text-slate-500 mb-2'>
          {userInformation?.bio}
        </p>
        <div className='w-full border border-slate-400' />
        <div className='flex mt-2 mb-3 items-center font-inter text-sm tracking-wider'>
          <FollowersIcon /> <span className='font-semibold'>{userInformation?.followers}</span> followers
          |
          <span className='font-semibold'>{userInformation?.following}</span> following
        </div>
        <ul className='list-none'>
          <li className='items-center text-sm pt-1 flex' aria-label={`Organization: ${userInformation?.company}`}>
            <OrganizationIcon />
            <span className='pl-2' title={userInformation?.company}>
              {userInformation?.company}
            </span>
          </li>
          <li className='items-center text-sm pt-1 flex' aria-label={`Organization: ${userInformation?.location}`}>
            <LocationIcon />
            <span className='pl-1' title={userInformation?.location}>
              {userInformation?.location}
            </span>
          </li>
          <li className='items-center text-sm pt-1 flex' aria-label={`Organization: ${userInformation?.blog}`}>
            <ResourceLinkIcon />
            <span className='pl-1' title={userInformation?.blog}>
              {userInformation?.blog}
            </span>
          </li>
          <li className='items-center text-sm pt-1 flex' aria-label={`Organization: ${userInformation?.twitterUsername}`}>
            <TwitterIcon />
            <span className='pl-0' title={userInformation?.twitterUsername}>
              {userInformation?.twitterUsername}
            </span>
          </li>
        </ul>
      </article>
    </>
  );
}