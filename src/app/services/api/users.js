import { query } from "../db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const users = await query({
      query: "SELECT * FROM Users",
      values: [],
    });
    res.status(200).json({ users: users });
  }
}
