import RepositoriesSkeleton from '@/components/about/repositories-skeleton';
import UserSkeletonCard from '@/components/about/user-skeleton-card';

export default function AboutLoadingPage() {
  return <div className='animate-pulse container mr-auto ml-auto flex mt-10'>
    <aside className='w-1/4'><UserSkeletonCard /></aside>
    <section className='w-3/4'>
      <RepositoriesSkeleton />
    </section>
  </div>;
}