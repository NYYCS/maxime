import getDatabase from "../../lib/getDatabase"

async function getReservations() {
  const conn = getDatabase();
  return await conn.query("SELECT * FROM reservations WHERE date > CURRENT_DATE")
    .then(res => res.rows);
}

export default async function(req, res) {
  const reservations = await getReservations();
  res.status(200).json({ reservations });
}