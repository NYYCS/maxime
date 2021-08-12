import { getSession } from "next-auth/client";
import getDatabase from "../../../lib/getDatabase"

export default async function(req, res) {
  const session = await getSession({ req });
  if (session?.user.role != "admin") {
    res.status(404);
  } else {
    const conn = getDatabase();
    conn.query("SELECT created_by, date, time, guests, first_name, last_name FROM reservations INNER JOIN users ON created_by = uuid")
      .then(results => res.status(200).json({ reservations: results.rows }));
  }
}