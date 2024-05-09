import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  if (username) {
    NextResponse.json({ username, password });
  } else {
    NextResponse.json({ message: "No user found" });
  }
}
