import { NextRequest, NextResponse } from 'next/server';

export async function GET(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	const id = params.id;
	// * new way to get parameters
	const { searchParams } = request.nextUrl;
	// * old way
	// const { searchParams } = new URL(request.url);
	const sort = searchParams.get('sort');
	console.info('searchParams', searchParams);
	return NextResponse.json(
		{
			message: 'This is the way to implement dynamic route handlers on nextjs',
			route: id,
			sort,
		},
		{ status: 201 }
	);
}
