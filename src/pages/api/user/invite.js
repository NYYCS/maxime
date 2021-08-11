import { getSession } from "next-auth/client"
import getDatabase from "../../../lib/getDatabase"
import { getInvites } from "../../../lib/user"

async function createInvite(uuid) {
  const conn = getDatabase();
  const res = await conn.query("INSERT INTO invites (hash, created_by) VALUES ($1, $2) RETURNING hash", ["1aZP38", uuid]);
  return res.rows[0].hash;
}

export default async function(req, res) {
  const session = await getSession({ req });
  if (!session) {
    res.status(400).json({ error: "Unauthenticated." });
  } else {
    const invites = await getInvites(session.user.uuid);
    if (invites.length >= 15) {
      res.status(400).json({ error: "No invites left." });
    } else {
      const invite = await createInvite(session.user.uuid);
      res.status(200).json({ invite });
    }
  }
  
}