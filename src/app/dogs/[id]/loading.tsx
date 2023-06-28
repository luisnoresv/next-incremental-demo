export default function SkeletonDogCard() {
  return (
    <section className='animate-pulse justify-center w-2/3'>
      <div className='rounded bg-slate-400 w-1/2 h-4 m-4' />
      <figure className="w-full ml-5 flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <div className='rounded-lg m-5 w-80 h-80 bg-slate-400'></div>
        <div className="md:p-8 text-center md:text-left space-y-4 w-80">
          <blockquote>
            <div className='w-full h-10 rounded bg-slate-400'></div>
          </blockquote>
          <figcaption className="font-medium">
            <div className="flex flex-col gap-2 text-slate-700 dark:text-slate-500">
              <ul className='flex flex-col gap-3 space-y-5'>
                <li className='flex gap-2'>
                  <div className='w-1/3 h-5 rounded bg-slate-400'></div>
                  <div className='w-2/3 h-5 rounded bg-slate-400'></div>
                </li>
                <li className='flex gap-2'>
                  <div className='w-1/3 h-5 rounded bg-slate-400'></div>
                  <div className='w-2/3 h-5 rounded bg-slate-400'></div>
                </li>
                <li className='flex gap-2'>
                  <div className='w-1/3 h-5 rounded bg-slate-400'></div>
                  <div className='w-2/3 h-5 rounded bg-slate-400'></div>
                </li>
                <li className='flex gap-2'>
                  <div className='w-1/3 h-5 rounded bg-slate-400'></div>
                  <div className='w-2/3 h-5 rounded bg-slate-400'></div>
                </li>
                <li className='flex gap-2'>
                  <div className='w-1/3 h-5 rounded bg-slate-400'></div>
                  <div className='w-2/3 h-5 rounded bg-slate-400'></div>
                </li>
              </ul>
            </div>
          </figcaption>
        </div>
      </figure>
    </section>
  );
}