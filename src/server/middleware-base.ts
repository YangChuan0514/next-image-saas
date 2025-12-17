import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getServerAuthSession } from "@/src/server/auth";
export async function middleware(request: NextRequest) {
  // nextjs middleware不能调用数据库，所以不能使用getServerAuthSession
  const session = await getServerAuthSession();
  if (session) {
    return NextResponse.redirect("/api/auth/signin");
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
