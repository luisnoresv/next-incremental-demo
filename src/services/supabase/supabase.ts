import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { createClient } from '@supabase/supabase-js';
import { getServerSession } from 'next-auth';

export class Supabase {
	static getSupabaseClient(token: string | undefined) {
		const supabaseClient = createClient(
			process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
			process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
			{
				global: {
					headers: {
						Authorization: token ? `Bearer ${token}` : '',
					},
				},
			}
		);
		return supabaseClient;
	}

	static async getSupabaseToken() {
		const session = await getServerSession(authOptions);
		let token: string | undefined;

		if (session) {
			const { supabaseAccessToken } = session!;
			token = supabaseAccessToken;
		}

		return token;
	}
}
