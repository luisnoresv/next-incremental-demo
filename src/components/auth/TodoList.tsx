import { ResponseContent, Todo } from '@/lib/models/Api';
import CodeBlock from '../ui/CodeBlock';

const BASE_API_URL = process.env.HOST_URL;

async function fetchTodos(): Promise<ResponseContent<Todo>> {
  const response = await fetch(`${BASE_API_URL}/api/todo`, { method: 'GET' });
  return response.json();
}

export default async function TodosList() {
  const todos = await fetchTodos();

  return <CodeBlock title='Todos List' path='src/app/api/todo/route.tsx' items={todos.data} />;
}