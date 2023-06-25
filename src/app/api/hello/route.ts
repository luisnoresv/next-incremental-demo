import { NextRequest, NextResponse } from 'next/server';

export async function GET(resquest: NextRequest) {
	return NextResponse.json({
		message:
			'Hello, This is a call to route handler inside the api folder in Next.js!!',
	});
}
