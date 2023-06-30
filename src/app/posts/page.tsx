import SupabaseDataSection from '@/components/ui/SupabaseDataSection';
import { Supabase } from '@/services/supabase';

export default async function Posts() {
  const posts = await Supabase.fetchPost();

  return <SupabaseDataSection tableName='Posts table' data={posts} />;
}