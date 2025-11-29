import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function proxy(req) {
    // Add any additional proxy logic here
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // If there's a token, user is authenticated
        // This proxy only runs on protected routes (excluded from matcher)
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - Public routes: /, /login, /register
     * - API routes: /api
     * - Next.js internals: _next/static, _next/image
     * - Static files: images, favicon, etc.
     */
    // "/((?!api|_next/static|_next/image|favicon.ico|login|register|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).+)",
  ],
};
