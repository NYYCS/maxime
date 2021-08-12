import { getSession } from "next-auth/client"
import getDatabase from "../../../lib/getDatabase"
import { getInvites } from "../../../lib/user"
import crypto from "crypto"

function generateInviteHash() {
  return crypto.randomBytes(20).toString("hex").substr(0, 6);
}

async function createInvite(uuid) {
  const conn = getDatabase();
  return await conn.query("INSERT INTO invites (hash, created_by) VALUES ($1, $2) RETURNING hash", [generateInviteHash(), uuid])
    .then(res => conn.query("SELECT * FROM invites WHERE hash = $1", [res.rows[0].hash]))
    .then(res => res.rows[0]);
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