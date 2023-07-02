import RealTimePosts from '@/components/posts/real-time-posts';
import { PostService } from '@/services/supabase/post-service';

// * We need to revalidate to avoid hit cache
export const revalidate = 0;

export default async function Posts() {
  const posts = await PostService.fetchPost();

  return <RealTimePosts serverPosts={posts} />;
}