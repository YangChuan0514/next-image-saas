import { NextResponse, NextRequest } from "next/server";

 
export function GET(request: NextRequest) {
  return NextResponse.json({ message: "Hello, world!" });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({ message: "Hello, world!" });
}