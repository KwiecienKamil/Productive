import pool from "@/app/libs/mysql";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const { username, password } = await req.json();
      const values = [username, password];
      const query =
        "SELECT Username, User_id FROM Users WHERE Username = ? AND Password = ?";
      const db = await pool.getConnection();
      const [result]: any = await db.execute(query, values);

      db.release();

      if (result.length > 0) {
        return NextResponse.json({
          success: true,
          message: "Successfully Logged In",
          userData: result,
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Invalid username or password",
        });
      }
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
