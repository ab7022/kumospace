// app/middleware.tsx
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  console.log('token', token);

  // Redirect to home if not authenticated and accessing a protected route
  if (!token && request.nextUrl.pathname.startsWith('/Dashboard')) {
    console.log('redirecting to signin', request.url, token);
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }
}

export const config = {
  matcher: ['/Dashboard/:path*'], // Apply middleware to the Dashboard route
};
