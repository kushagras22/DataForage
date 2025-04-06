import type { auth } from "@/lib/better-auth/auth";
import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';
import { Session } from "./lib/better-auth/auth-types";




export async function getMiddlewareSession(req: NextRequest) {
  const { data: session } = await axios.get<Session>("/api/auth/get-session", {
    baseURL: req.nextUrl.origin,
    headers: {
      cookie: req.headers.get("cookie") || "",
    },
  });

  return session
}


export default async function authMiddleware(req: NextRequest) {
  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }
}