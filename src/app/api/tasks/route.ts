import pool from "@/app/libs/mysql";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const { taskName, parsedUserId } = await req.json();
      const values = [taskName, parsedUserId];
      const query = "INSERT INTO Tasks ( Task_title, User_id) VALUES (?, ?)";
      const db = await pool.getConnection();
      const [result]: any = await db.execute(query, values);

      db.release();
      return NextResponse.json(result);
    } catch (error) {
      return NextResponse.json(
        {
          error: error,
        },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json("FAILED");
  }
}

export async function GET(request: Request) {
  if (request.method === "GET") {
    try {
      const db = await pool.getConnection();

      const query = "SELECT * FROM Tasks";
      const [result] = await db.execute(query);
      db.release();

      return NextResponse.json(result);
    } catch (error) {
      return NextResponse.json(
        {
          error: error,
        },
        { status: 500 }
      );
    }
  }
}
