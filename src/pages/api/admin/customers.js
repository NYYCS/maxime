import { getSession } from "next-auth/client";
import getDatabase from "../../../lib/getDatabase"

export default async function(req, res) {
  const session = await getSession({ req });
  if (session?.user.uuid != "c8289629-8a44-4654-85f6-e12c502fc272") {
    res.status(404);
  } else {
    const conn = getDatabase();
    conn.query("SELECT id, uuid, email, first_name, last_name FROM users")
      .then(results => res.status(200).json({ users: results.rows }));
  }
}