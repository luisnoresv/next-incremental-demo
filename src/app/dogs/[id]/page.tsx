import DogCard from '@/components/dogs/DogCard';
import { DOGS_QY_PER_REQUEST, FETCH_ORDER } from '@/lib/appConstants';
import { fetchDogById, fetchDogs } from '@/services/dogApi';
import { Suspense } from 'react';
import SkeletonDogCard from './loading';

export default async function DogsDetailPage({ params }: { params: { id: string; }; }) {
  const dog = await fetchDogById(params.id);

  return (
    <Suspense fallback={<SkeletonDogCard />}>
      <section className='justify-center'>
        <h2 className='text-center text-3xl m-4 text-sky-500'>{dog.breeds[0].name}</h2>
        <DogCard dog={dog} />
      </section>
    </Suspense>
  );
}

export async function generateStaticParams() {
  const dogs = await fetchDogs(FETCH_ORDER, DOGS_QY_PER_REQUEST);

  return dogs.map(dog => ({ id: dog.id }));
}