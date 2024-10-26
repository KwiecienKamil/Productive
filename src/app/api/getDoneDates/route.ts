import pool from "@/app/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  if (request.method === "GET") {
    try {
      const db = await pool.getConnection();

      const query =
        "SELECT Tasks.Task_id, Tasks.User_id, doneDates.Task_doneDate FROM Tasks JOIN doneDates ON Tasks.Task_id = doneDates.Task_id";
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
