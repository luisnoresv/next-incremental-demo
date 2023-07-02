import { Todos } from '@/lib/models/SupabaseDomain';
import { Supabase } from './supabase';

export class TodosService {
	static async fetchTodos(): Promise<Todos[] | undefined> {
		try {
			const { data: todos, error } = await Supabase.getSupabaseClient('')
				.from('todos')
				.select();

			if (error) {
				throw new Error(
					`Error from supabase: ${error.details}, ${error.details}, ${error.code}`
				);
			}

			return todos;
		} catch (error) {
			console.error({ error });
		}
	}

	static async createTodo(title: string) {
		try {
			const { error } = await Supabase.getSupabaseClient('')
				.from('todos')
				.insert({ title });

			if (error) {
				throw new Error(
					`Error from supabase: ${error.details}, ${error.details}, ${error.code}`
				);
			}
		} catch (error) {
			console.error({ error });
		}
	}

	static async updateTodo(id: string) {
		try {
			const { error } = await Supabase.getSupabaseClient('')
				.from('todos')
				.update({ is_complete: true })
				.match({ id });

			if (error) {
				throw new Error(
					`Error from supabase: ${error.details}, ${error.details}, ${error.code}`
				);
			}
		} catch (error) {
			console.error({ error });
		}
	}
}
