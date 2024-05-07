import { NextResponse } from "next/server";
import pool from "../libs/mysql";

export async function POST() {
  try {
    const values = ["XDSDAS", "123323244"];
    const query = "INSERT INTO Users (Username, Password) VALUES (?, ?)";
    const db = await pool.getConnection();
    const [result] = await db.execute(query, values);
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
