import { Todos } from '@/lib/models/supabase-domain';
import CodeBlock from '../ui/code-block';

const BASE_API_URL = process.env.HOST_URL;

async function fetchTodos(): Promise<Todos[]> {
  const response = await fetch(`${BASE_API_URL}/api/todos`, { cache: 'no-cache' });
  return response.json();
}

export default async function TodosList() {
  const todos = await fetchTodos();

  return <CodeBlock title='Todos List' path='src/app/api/todos/route.tsx' items={todos!} />;
}