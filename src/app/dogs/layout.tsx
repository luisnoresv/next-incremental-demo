import DogsList from '@/components/dogs/DogsList';
import { DOGS_QY_PER_REQUEST, FETCH_ORDER } from '@/lib/appConstants';
import { fetchDogs } from '@/services/dogApi';

export const metadata = {
  title: 'Dogs detail page',
  description: 'Dogs detail page information',
  keywords: 'dogs, dogs api, breeds, detail'
};

export default async function DogsLayout({ children }: {
  children: React.ReactNode;
}) {
  const dogs = await fetchDogs(FETCH_ORDER, DOGS_QY_PER_REQUEST);

  return (
    <div className='w-full h-full'>
      <section className='container mr-auto ml-auto flex mt-10'>
        <aside className='w-1/4 p-8 bg-purple-200'>
          <DogsList dogs={dogs} />
        </aside>
        <section className='w-3/4'>
          {children}
        </section>
      </section>
    </div>
  );
}