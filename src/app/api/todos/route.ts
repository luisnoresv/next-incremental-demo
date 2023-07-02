import { NextRequest, NextResponse } from 'next/server';

import { TodosService } from '@/services/supabase/todos-service';

// export async function GET() {
// 	return NextResponse.json({ data: todos }, { status: 200 });
// }

export async function GET(request: NextRequest) {
	const todos = await TodosService.fetchTodos();
	return NextResponse.json(todos);
}

export async function POST(request: NextRequest) {
	const { title } = await request.json();
	await TodosService.createTodo(title);
	return NextResponse.json({ message: title });
}

export async function PUT(request: NextRequest) {
	const { id } = await request.json();
	await TodosService.updateTodo(id);
	return NextResponse.json({ message: `Updated todo with the id: ${id}` });
}
