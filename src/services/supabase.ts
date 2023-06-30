import 'server-only';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { createClient } from '@supabase/supabase-js';
import { getServerSession } from 'next-auth';

function createSupabaseClient(token: string | undefined) {
	const supabase = createClient(
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
	return supabase;
}

export async function fetchUsersFromSupabase() {
	try {
		const session = await getServerSession(authOptions);

		let token: string | undefined;

		if (session) {
			const { supabaseAccessToken } = session!;
			token = supabaseAccessToken;
		}
		const { data: users, error } = await createSupabaseClient(token)
			.from('users')
			.select('*');

		if (error) {
			console.error('Error from supabase', error);
		}

		return users;
	} catch (error) {
		console.error('error', error);
	}
}
