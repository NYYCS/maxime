import { getSession } from "next-auth/client"
import getDatabase from "./getDatabase";

async function getUser({ req }) {
  const session = await getSession({ req });
  const conn = getDatabase();
  const user = await conn.query( "SELECT * FROM users WHERE uuid = $1", [session.user.uuid])
    .then(res => res.rows[0]);
  return user;
}