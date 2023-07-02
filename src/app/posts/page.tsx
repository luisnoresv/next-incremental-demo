import SupabaseDataSection from '@/components/ui/supabase-data-section';
import { PostService } from '@/services/supabase/post-service';

export const revalidate = 60;
export default async function Posts() {
  const posts = await PostService.fetchPost();

  return <SupabaseDataSection tableName='Posts table' data={posts} />;
}


