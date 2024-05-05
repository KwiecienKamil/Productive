// import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

import { NextResponse } from "next/server";

export async function GET() {
  const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });
  try {
    const query = "SELECT * FROM Users";
    const values: any = [];
    const [data] = await db.execute(query, values);
    return NextResponse.json({
      values: data,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}
