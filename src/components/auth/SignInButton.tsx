'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function SignInButton() {
  const { data: session } = useSession();

  return (
    <section className='w-full mt-10 flex justify-center'>
      {session ? (
        <article className='w-80'>
          <p className='font-medium text-xl'>User information</p>
          <section className='border border-collapse p-5 flex-col'>
            <div className='flex'>
              <div className='relative h-20 w-20'>
                <Image src={session.user?.image!} alt={session.user?.name!} fill className='rounded-full inline-block' />
              </div>
              <article>
                <p className='font-medium text-stone-600'>{session.user?.name || 'User name'}</p>
                <p className='text-stone-400'>{session.user?.email}</p>
              </article>
            </div>
            <button className='rounded-md border border-slate-300 bg-stone-600 text-purple-300 px-3 py-1 font-medium text-sm' onClick={() => signOut()}>
              Sign Out
            </button>
          </section>
        </article>
      ) : (
        <article className='w-full mt-10 flex justify-center'>
          <section className='w-80'>
            <p className='font-medium text-xl'>If you Sign In with your <strong>Github</strong> in to the app you will se some valuable information</p>
            <button className='rounded-md border border-slate-300 bg-purple-400 px-3 py-1 text-sm font-medium' onClick={() => signIn()}>
              Sign In
            </button>
          </section>
        </article>
      )
      }
    </section >
  );
}

