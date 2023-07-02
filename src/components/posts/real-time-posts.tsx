'use client';

import { Posts } from '@/lib/models/supabase-domain';
import { Supabase } from '@/services/supabase/supabase';
import { useEffect, useState } from 'react';
import SupabaseDataSection from '../ui/supabase-data-section';


interface Props {
  serverPosts?: Posts[];
}

export default function RealTimePosts({ serverPosts }: Props) {
  const [posts, setPosts] = useState<Posts[]>(serverPosts!);

  useEffect(() => {
    const channel = Supabase.getSupabaseClient('').channel('realtime posts').on('postgres_changes', {
      event: 'INSERT', schema: 'public', table: 'posts'
    }, (payload) => {
      // console.info('payload on client side', { payload });
      setPosts([...posts, payload.new as Posts]);
    }).subscribe();

    return () => {
      Supabase.getSupabaseClient('').removeChannel(channel);
    };
  }, [setPosts, posts]);


  return (
    <SupabaseDataSection tableName='Posts table in Realtime' data={posts} />
  );
}