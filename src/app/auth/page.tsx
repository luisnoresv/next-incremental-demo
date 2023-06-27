
import CodeBlock from '@/components/auth/CodeBlock';
import SignInButton from '@/components/auth/SignInButton';
import { ResponseContent, Todo } from '@/lib/models/Api';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

const BASE_API_URL = process.env.HOST_URL;



async function fetchTodos(): Promise<ResponseContent<Todo>> {
  const response = await fetch(`${BASE_API_URL}/api/todo`, { method: 'GET' });
  return response.json();
}

// async function fetchPosts(): Promise<ResponseContent<Post>> {
//   const response = await fetch(`${BASE_API_URL}/api/post`, { method: 'GET' });
//   return response.json();
// }

export default async function AuthPage() {
  const session = await getServerSession(authOptions);

  const todos = await fetchTodos();




  return (
    <section className='w-full flex flex-col items-center'>
      <h2 className='text-2xl text-slate-600 mt-6 mb-6'>Route Handlers</h2>
      <CodeBlock title='List of Todos' path='todo' data={todos.data} />
      <SignInButton />
    </section>
  );
}