import { Dog } from '@/lib/models/Dogs';
import Image from 'next/image';

type Props = {
  dog: Dog;
};

export default function DogCard({ dog }: Props) {
  return (
    <figure className="w-full ml-5 flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <Image
        src={dog.url}
        alt={dog.breeds[0].name}
        width="400"
        height="400"
        className='m-5 rounded-lg'
      />
      <div className="md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-slate-500 text-lg font-medium">
            {`"${dog.breeds[0].temperament}"`}
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="flex flex-col gap-2 text-slate-700 dark:text-slate-500">
            <ul className='flex flex-col gap-3'>
              <li>
                <span className='font-bold'>Group: </span>
                <span className='text-slate-500'>{dog.breeds[0].breed_group}</span>
              </li>
              <li>
                <span className='font-bold'>Size: </span>
                <span className='text-slate-500'>{dog.breeds[0].height.metric}cm</span>
              </li>
              <li>
                <span className='font-bold'>Weight: </span>
                <span className='text-slate-500'>{dog.breeds[0].weight.metric}kg</span>
              </li>
              <li>
                <span className='font-bold'>Hobbies: </span>
                <span className='text-slate-500'>{dog.breeds[0].bred_for}</span>
              </li>
              <li>
                <span className='font-bold'>Life Span: </span>
                <span className='text-slate-500'>{dog.breeds[0].life_span}</span>
              </li>
            </ul>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}