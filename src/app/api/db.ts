// import mysql from "mysql";

// export async function query({ query, values = [] }: any) {
//   const dbconnection = await mysql.createConnection({
//     host: process.env.DB_HOST,
//     database: process.env.DB,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
//   });

//   dbconnection.connect();

//   dbconnection.query("SELECT * FROM Users", (error: any, results: any) => {
//     if (error) {
//       results.status(500).json({ error: error.message });
//     } else {
//       results.status(200).json(results);
//     }
//     dbconnection.end();
//   });
// }
