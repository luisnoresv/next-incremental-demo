export default function ProtectedServerPage() {
  return (
    <section className='w-full flex flex-col items-center text-2xl'>
      <article className='w-3/4 mt-8 border-4 border-purple-500 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-slate-800 rounded-lg'>
        <pre className='flex flex-col p-12'>
          <h3 className='text-center mb-6 font-semibold'>Protected Server Route</h3>
          <code className='text-center text-xl'>🚀 This page was <strong>protected on the server</strong> by using <strong>NextAuth</strong>(👨🏻‍💻) and <strong>NextJs</strong> middleware</code>
        </pre>
      </article>
    </section>
  );
}