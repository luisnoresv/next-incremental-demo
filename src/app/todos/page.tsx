
const BASE_API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

async function fetchTodos(): Promise<Todo[]> {
  const response = await fetch(`${BASE_API_URL}/api/todo`, { method: 'GET' });
  return response.json();
}

export default async function TodosPage() {
  const todos = await fetchTodos();
  return (
    <section className='w-full flex flex-col items-center'>
      <h2 className='text-2xl text-slate-600 mt-6 mb-6'>Fetching data example</h2>
      <p className="p-8 flex flex-col justify-center text-center rounded-xl border border-gray-300 bg-gradient-to-b from-purple-300">
        <span>
          This data is fetch with <strong>Route Handlers</strong> from
        </span>
        <code className="font-mono font-bold">src/app/api/route.tsx</code>
      </p>
      <aside className='w-3/4 mt-8 border-4 border-purple-500 bg-gray-600 text-slate-300 rounded-lg'>
        <pre className='flex flex-col p-12'>
          <h3 className='text-center mb-6 font-semibold'>Todos List</h3>
          {todos.map(todo => (
            <code key={todo.id}>{JSON.stringify(todo)}</code>
          ))}
        </pre>
      </aside>
    </section>
  );
}