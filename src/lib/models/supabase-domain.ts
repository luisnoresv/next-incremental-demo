export interface Posts {
	content: string | null;
	created_at: string | null;
	id: string;
	title: string | null;
}

export interface Todos {
	created_at: string | null;
	id: string;
	is_complete: boolean | null;
	title: string | null;
}

export interface Users {
	email: string | null;
	id: string;
	image: string | null;
	name: string | null;
}
