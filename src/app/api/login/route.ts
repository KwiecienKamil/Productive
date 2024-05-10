import pool from "@/app/libs/mysql";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const { username, password } = await req.json();
      const values = [username, password];
      const query =
        "SELECT Username FROM Users WHERE Username = ? AND Password = ?";
      const db = await pool.getConnection();
      const [result]: any = await db.execute(query, values);
      db.release();

      if (result.length > 0) {
        // User with provided username and password exists
        return NextResponse.json({
          success: true,
          message: "SuccessFully Logged In",
        });
      } else {
        // User with provided username and password does not exist
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
