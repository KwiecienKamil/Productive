import { NextResponse } from "next/server";
import pool from "@/app/libs/mysql";

export async function GET() {
  try {
    const db = await pool.getConnection();
    const Users_id = 4;
    const Username = "kamciuuu";
    const Password = "12345";

    const query =
      "INSERT INTO Users (Users_id, Username, Password) VALUES (Users_id, Username, Password)";

    db.query(query, function (error: any, data: any) {
      if (error) {
        throw error;
      } else {
        console.log(data);
      }
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
      },
      { status: 500 }
    );
  }
}
