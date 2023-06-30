import 'server-only';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { createClient } from '@supabase/supabase-js';
import { getServerSession } from 'next-auth';

export class Supabase {
	private static createSupabaseClient(token: string | undefined) {
		const supabaseClient = createClient(
			process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
			process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
			{
				global: {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			}
		);
		return supabaseClient;
	}

	private static async getSupabaseToken() {
		const session = await getServerSession(authOptions);

		let token: string | undefined;

		if (session) {
			const { supabaseAccessToken } = session!;
			token = supabaseAccessToken;
		}

		return token;
	}

	static async fetchUsers() {
		try {
			const token = await this.getSupabaseToken();
			const { data, error } = await this.createSupabaseClient(token)
				.from('users')
				.select('*');

			if (error) {
				throw new Error(`Error from supabase error: ${error}`);
			}

			return data;
		} catch (error) {
			console.error(error);
		}
	}

	/**
	 * * RLS allows the SELECT method for unauthenticated users
	 * @returns the postList stores on the post table
	 */
	static async fetchPost() {
		try {
			const { data, error } = await this.createSupabaseClient('')
				.from('posts')
				.select();

			if (error) {
				throw new Error(`Error from supabase error: ${error}`);
			}

			return data;
		} catch (error) {
			console.error(error);
		}
	}
}
