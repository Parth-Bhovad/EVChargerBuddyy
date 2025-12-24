// middleware.ts
import { auth } from "@/app/lib/auth"; // your betterAuth instance
import { NextResponse } from "next/server";

export async function proxy(req: Request) {
  const session = await auth.api.getSession({ headers: req.headers });

  if (!session) {
    // redirect to login if no session
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // allow request if session exists
  return NextResponse.next();
}

// Protect specific routes
export const config = {
  matcher: ["/profile", "/map", "/your-charging-stations", "/charging-station"], // routes to protect
};
