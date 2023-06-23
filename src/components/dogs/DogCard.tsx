import { Dog } from '@/lib/models/Dogs';
import Image from 'next/image';

type Props = {
  dog: Dog;
};

export default function DogCard({ dog }: Props) {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <Image
        src={dog.url}
        alt={dog.breeds[0].name}
        width={300}
        height={300}
        className='md:h-auto mx-auto'
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            {`"${dog.breeds[0].temperament}"`}
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            {dog.breeds[0].name}
          </div>
          <div className="text-slate-700 dark:text-slate-500">
            Group: {dog.breeds[0].breed_group}
            <p>Weight: {dog.breeds[0].weight.metric}kg</p>
            <p>Size: {dog.breeds[0].height.metric}cm</p>
            <p>Hobbies: {dog.breeds[0].bred_for}</p>
            <p>Life: {dog.breeds[0].life_span}</p>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}