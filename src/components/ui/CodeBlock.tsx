
interface Props {
  path: string;
  title: string;
  items: any[];
}

export default function CodeBlock({ path, title, items }: Props) {
  return (
    <>
      <p className="p-6 flex flex-col justify-center text-center rounded-xl border border-gray-300 bg-gradient-to-b from-purple-300">
        <span>
          This data was fetched from
        </span>
        <code className="font-mono font-bold">{path}</code>
      </p>
      <aside className='w-3/4 mt-8 border-4 border-purple-500 bg-gray-600 text-slate-300 rounded-lg'>
        <pre className='flex flex-col p-12'>
          <h3 className='text-center mb-6 font-semibold'>{title}</h3>
          {items.map(item => (
            <code key={item.id}>{JSON.stringify(item, null, 2)}</code>
          ))}
        </pre>
      </aside>
    </>
  );
}