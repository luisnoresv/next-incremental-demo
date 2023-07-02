import { Posts } from '@/lib/models/supabase-domain';
import { Supabase } from './supabase';

export class PostService {
	/**
	 * * RLS allows the SELECT method for unauthenticated users
	 * @returns the postList stores on the post table
	 */
	static async fetchPost(): Promise<Posts[] | undefined> {
		try {
			const { data, error } = await Supabase.getSupabaseClient('')
				.from('posts')
				.select();

			if (error) {
				throw new Error(`Error from supabase: ${error}`);
			}

			return data;
		} catch (error) {
			console.error(error);
		}
	}
}
