import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
	console.info(request);
	return NextResponse.redirect(new URL('/', request.url));
}

// "Matching Paths"
export const config = {
	matcher: '/blog/:path*',
};

// /**
//  * * We can handle tokens with the next-auth/middleware
//  */
// export { default } from 'next-auth/middleware';

// export const config = {
// 	matcher: ['/protected/:path*', '/blog/:path*'],
// };
