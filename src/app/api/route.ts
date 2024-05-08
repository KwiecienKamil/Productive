import { NextResponse } from "next/server";
import pool from "../libs/mysql";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  if (request.method === "GET") {
    try {
      const db = await pool.getConnection();
      const query = "SELECT * FROM Users";
      const [rows] = await db.execute(query);
      db.release();

      return NextResponse.json(rows);
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

export async function POST(request: Request) {
  if (request.method === "POST") {
    try {
      const { username, password } = await request.json();
      const values = [username, password];
      const query = "INSERT INTO Users (Username, Password) VALUES (?, ?)";
      const db = await pool.getConnection();
      const result = await db.execute(query, values);
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
  redirect("/");
}
