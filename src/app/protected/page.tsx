
import SupabaseDataSection from '@/components/ui/supabase-data-section';
import { UsersService } from '@/services/supabase/users-service';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function ProtectedServerPage() {
  const session = await getServerSession(authOptions);

  const users = await UsersService.fetchUsers();

  return (
    <>
      <section className='w-full flex flex-col items-center'>
        <article className='w-3/4 mt-8 border-4 border-purple-500 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-slate-800 rounded-lg'>

          <pre className='flex flex-col p-12 text-2xl'>
            <h3 className='text-center mb-6 font-semibold text-white'>Protected Server Route</h3>
            {session ?
              (
                <>
                  <code className='text-center text-xl text-white'>
                    🚀 This page was <strong>protected on the server</strong> by using <strong>NextAuth</strong>(👨🏻‍💻) and <strong>NextJs</strong> middleware
                  </code>
                </>
              )
              : (
                <div className='text-center text-xl text-white'>
                  You are not authorize to see the content of this page!!!
                </div>
              )
            }

          </pre>
        </article>
      </section>
      {session &&
        <SupabaseDataSection data={users} tableName='Users table' />
      }
    </>
  );
}