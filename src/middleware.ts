import { NextResponse } from "next/server";

export function middleware() {
  // No auth; allow all requests through.
  return NextResponse.next();
}

