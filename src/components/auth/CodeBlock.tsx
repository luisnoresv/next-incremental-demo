import { ResponseContent, Todo } from '@/lib/models/Api';


interface Props {
  path: string;
  title: string;
}

const BASE_API_URL = process.env.HOST_URL;

async function fetchTodos(): Promise<ResponseContent<Todo>> {
  const response = await fetch(`${BASE_API_URL}/api/todo`, { method: 'GET' });
  return response.json();
}

export default async function CodeBlock({ path, title }: Props) {
  const todos = await fetchTodos();

  return (
    <>
      <p className="p-6 flex flex-col justify-center text-center rounded-xl border border-gray-300 bg-gradient-to-b from-purple-300">
        <span>
          This data was fetched from
        </span>
        <code className="font-mono font-bold">{`src/app/api/${path}/route.tsx`}</code>
      </p>
      <aside className='w-3/4 mt-8 border-4 border-purple-500 bg-gray-600 text-slate-300 rounded-lg'>
        <pre className='flex flex-col p-12'>
          <h3 className='text-center mb-6 font-semibold'>{title}</h3>
          {todos.data.map(item => (
            <code key={item.id}>{JSON.stringify(item)}</code>
          ))}
        </pre>
      </aside>
    </>
  );
}