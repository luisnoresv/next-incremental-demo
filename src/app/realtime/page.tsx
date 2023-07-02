import RealTimePosts from '@/components/ui/RealTimePosts';
import { PostService } from '@/services/supabase/postsService';

// * We need to revalidate to avoid hit cache
export const revalidate = 0;

export default async function Posts() {
  const posts = await PostService.fetchPost();

  return <RealTimePosts serverPosts={posts} />;
}