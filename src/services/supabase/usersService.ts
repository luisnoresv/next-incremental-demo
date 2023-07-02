import { Users } from '@/lib/models/SupabaseDomain';
import { Supabase } from './supabase';

export class UsersService {
	static async fetchUsers(): Promise<Users[] | undefined> {
		try {
			const token = await Supabase.getSupabaseToken();

			let users: Users[] = [];
			if (token) {
				const { data, error } = await Supabase.getSupabaseClient(token)
					.from('users')
					.select();

				if (error) {
					throw new Error(`Error from supabase: ${error}`);
				}
				users = data;
			}

			return users;
		} catch (error) {
			console.error(error);
		}
	}
}
