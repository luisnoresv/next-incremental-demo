
import CodeBlock from '@/components/auth/CodeBlock';
import SignInButton from '@/components/auth/SignInButton';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';


// async function fetchPosts(): Promise<ResponseContent<Post>> {
//   const response = await fetch(`${BASE_API_URL}/api/post`, { method: 'GET' });
//   return response.json();
// }

export default async function AuthPage() {
  //* we use the getServerSession method to get the session information on the server
  const session = await getServerSession(authOptions);

  // * This kind of logic is not support on RSC if the route api is protected
  // if (session) {
  //   const posts = await fetchPosts();
  //   console.info('Session - fetchPosts', posts);
  // }

  return (
    <section className='w-full flex flex-col items-center'>
      <SignInButton />
      {session &&
        <>
          <h2 className='text-2xl text-slate-600 mt-6 mb-6'>Route Handlers</h2>
          {/* @ts-expect-error Server Component */}
          <CodeBlock title='List of Todos' path='todo' />
        </>
      }
    </section>
  );
}