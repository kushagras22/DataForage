import type { auth } from "@/lib/better-auth/auth";
import { NextRequest, type NextResponse } from "next/server";
import axios from 'axios';


type Session = typeof auth.$Infer.Session;

export async function middleware(request: NextRequest) {
  const { data: session } = await axios.get<Session>("/api/auth/get-session", {
    baseURL: request.nextUrl.origin,
    headers: {
      cookie: request.headers.get("cookie") || "",
    },
  });

  return session;
}

export default async function authMiddleware(req: NextRequest) {
  const session = await getMiddlewareSession(req);
}