import Repositories from '@/components/about/Repositories';
import UserCard from '@/components/about/UserCard';
import { getUserInformatioFromGithub } from '@/services/githubApi';

export default async function AboutPage() {
  const userInformation = await getUserInformatioFromGithub('luisnoresv');

  return (<div className='container mr-auto ml-auto flex mt-10'>
    <aside className='w-1/4'><UserCard userInformation={userInformation} /></aside>
    <section className='w-3/4'><Repositories username={userInformation.name} /></section>
  </div>);
}