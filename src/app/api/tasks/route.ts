import pool from "@/app/libs/mysql";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const { user_id, taskTitle, task_id, taskDoneDates } = await req.json();
      const values = [task_id, taskTitle, taskDoneDates, user_id];
      const query =
        "INSERT INTO Tasks (Task_id, Task_title, Task_doneDates, User_id) VALUES (?, ?, ?, ?)";
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
