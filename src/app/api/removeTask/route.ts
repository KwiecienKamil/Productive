import pool from "@/app/libs/mysql";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const { Task_id } = await req.json();
      const values = Task_id;
      const query = "DELETE FROM Tasks WHERE Task_id = ?";
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
