// import { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
// 	// return NextResponse.redirect(new URL('/', request.url));
// 	console.info(request);
// }

// // "Matching Paths"
// export const config = {
// 	matcher: '/blog/:path*',
// };

/**
 * * We can handle tokens with the next-auth/middleware
 */
export { default } from 'next-auth/middleware';

export const config = {
	matcher: ['/protected', '/protected/:path*'],
};
