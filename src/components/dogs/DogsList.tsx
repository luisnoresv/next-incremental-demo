import { Dog } from '@/lib/models/Dogs';
import Link from 'next/link';

interface Props {
  dogs: Dog[];
};


export default function DogsList({ dogs }: Props) {
  return (
    <ul className='flex flex-col'>
      {dogs.map((dog) => (
        <li className='p-4 border-b-2 border-solid border-purple-700 text-slate-700' key={dog.id}>
          <article>
            <h2 className='font-medium'>{dog.breeds[0].name}</h2>
            <p className='text-xs text-slate-500'>{dog.breeds[0].breed_group}</p>
            <p>
              <Link className='text-sm text-purple-700 hover:text-slate-800' href={`/dogs/${dog.id}`}>View Details</Link>
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}