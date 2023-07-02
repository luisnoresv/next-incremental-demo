import CodeBlock from './code-block';
import { SupabaseIcon } from './icons';

interface Props {
  data: any[] | undefined;
  tableName: string;
};

export default function SupabaseDataSection({ data, tableName }: Props) {
  return (
    <section className='w-full mt-10 flex flex-col items-center'>
      <div className='flex gap-1 mb-2'>
        <h3 className='text-2xl font-bold'>Supabase</h3>
        <SupabaseIcon />
      </div>
      {data && data.length > 0 &&
        <CodeBlock title={tableName} path={tableName} items={data} />
      }
    </section>
  );
}