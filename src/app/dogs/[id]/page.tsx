
import { Suspense } from 'react';

import DogCard from '@/components/dogs/DogCard';
import { DOGS_QY_PER_REQUEST, FETCH_ORDER } from '@/lib/appConstants';
import { fetchDogById, fetchDogs } from '@/services/dogApi';

export default async function DogsDetailPage({ params }: { params: { id: string; }; }) {
  const dog = await fetchDogById(params.id);

  return (
    <Suspense fallback={<div>Fetching dog detail information...</div>}>
      <DogCard dog={dog} />;
    </Suspense>
  );
}

export async function generateStaticParams() {
  const dogs = await fetchDogs(FETCH_ORDER, DOGS_QY_PER_REQUEST);

  return dogs.map(dog => ({ id: dog.id }));
}