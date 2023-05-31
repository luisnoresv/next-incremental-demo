import { getRepositoriesFromGithubByUsername } from '@/services/githubApi';
import RepositoryCard from './RepositoryCard';

interface Props {
  username: string;
}

export default async function Repositories({ username }: Props) {
  const repositories = await getRepositoriesFromGithubByUsername(username);

  return (
    <article className='ml-6'>
      <h2 className='mb-2 font-normal pl-2'>Public Repositories List</h2>
      <ol className='flex  flex-wrap list-none mb-4'>
        {repositories.map(repo => (
          <li className='mb-3 flex content-stretch w-1/2 pr-2 pl-2' key={repo.id}>
            <RepositoryCard repository={repo} />
          </li>
        ))}
      </ol>
    </article>
  );
}