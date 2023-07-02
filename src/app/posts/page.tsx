import SupabaseDataSection from '@/components/ui/SupabaseDataSection';
import { PostService } from '@/services/supabase/postsService';

export default async function Posts() {
  const posts = await PostService.fetchPost();

  return <SupabaseDataSection tableName='Posts table' data={posts} />;
}


