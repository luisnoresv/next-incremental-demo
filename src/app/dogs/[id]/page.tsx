import Image from 'next/image';

import { DOGS_QY_PER_REQUEST, FETCH_ORDER } from '@/lib/appConstants';
import { fetchDogById, fetchDogs } from '@/services/dogApi';

export default async function DogsDetailPage({ params }: { params: { id: string; }; }) {
  const dog = await fetchDogById(params.id);

  return (
    <article>
      <section>
        <Image
          src={dog.url}
          alt={dog.breeds[0].name}
          width={300}
          height={300}
        />
        <h1>{dog.breeds[0].name}</h1>
        <p>Group: {dog.breeds[0].breed_group}</p>
      </section>
      <aside>
        <p>Weight: {dog.breeds[0].weight.metric}kg</p>
        <p>Size: {dog.breeds[0].height.metric}cm</p>
        <p>Hobbies: {dog.breeds[0].bred_for}</p>
        <p>Life: {dog.breeds[0].life_span}</p>
        <p>Temperament: {dog.breeds[0].temperament}</p>
      </aside>
    </article>
  );
}

export async function generateStaticParams() {
  const dogs = await fetchDogs(FETCH_ORDER, DOGS_QY_PER_REQUEST);

  return dogs.map(dog => ({ id: dog.id }));
}