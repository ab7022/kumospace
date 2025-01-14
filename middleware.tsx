// // app/middleware.js
// import { NextRequest, NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

// export async function middleware(request:NextRequest) {
//   const token = await getToken({ req: request });

//   // Redirect to home if not authenticated and accessing a protected route
//   if (!token && request.nextUrl.pathname === '/Dashboard') {
//     return NextResponse.redirect(new URL('/auth/signin', request.url));
//   }
//   if (!token && request.nextUrl.pathname === '/Dashboard/Workspace') {
//     return NextResponse.redirect(new URL('/auth/signin', request.url));
//   }
// }

// export const config = {
//   matcher: ['/Dashboard/:path*'], // Apply middleware to the Dashboard route
// };
