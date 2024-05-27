import pool from "@/app/libs/mysql";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  if (request.method === "POST") {
    try {
      const { Task_id } = await request.json();
      const value = [Task_id];
      const db = await pool.getConnection();
      const query =
        "SELECT Tasks.*, doneDates.Task_doneDate FROM Tasks JOIN doneDates ON Tasks.Task_id = doneDates.Task_id WHERE Tasks.Task_id = ?";
      const [result] = await db.execute(query, value);
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
