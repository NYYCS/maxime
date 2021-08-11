import { getSession } from "next-auth/client"
import getDatabase from "./getDatabase";

async function getUser({ req }) {
  const session = await getSession({ req });
  const conn = getDatabase();
  const user = await conn.query( "SELECT * FROM users WHERE uuid = $1", [session.user.uuid])
    .then(res => res.rows[0]);
  return user;
}

async function getReservations(uuid) {
  const conn = getDatabase();
  const reservations = await conn.query( "SELECT * FROM reservations WHERE created_by = $1", [uuid])
    .then(res => res.rows);
  return reservations;
}

async function getInvites(uuid) {
  const conn = getDatabase();
  const invites = await conn.query( "SELECT * FROM invites WHERE created_by = $1", [uuid])
    .then(res => res.rows);
  return invites;
}

export {
  getUser,
  getReservations,
  getInvites,
}