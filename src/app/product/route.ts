import { NextResponse } from 'next/server';

/**
 *
 * * We do not need to create the route inside the api folder,
 * * but it is a better approach to use an api folder to manage all the route handlers
 */

export async function GET() {
	return NextResponse.json({ message: 'This is the product endpoint' });
}
