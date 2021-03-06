import getDatabase from "../../lib/getDatabase"

async function getReservations() {
  const conn = getDatabase();
  return await conn.query("SELECT date FROM reservations WHERE date > CURRENT_DATE")
    .then(res => res.rows.map(r => r.date));
}

export default async function(req, res) {
  const reservations = await getReservations();
  res.status(200).json({ reservations });
}