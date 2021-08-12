import getDatabase from "../../../lib/getDatabase"
import bcrypt from "bcrypt"

async function getInvite(hash) {
  const conn = getDatabase();
  const invite = await conn.query("SELECT * FROM invites WHERE hash = $1 AND status = 'unused'", [hash])
    .then(res => res.rows[0]);
  return invite;
}

async function createUser(user, invite) {
  const conn = getDatabase();
  await bcrypt.hash(user.password, 10)
    .then(passwordHash => {
      conn.query("INSERT INTO users (email, password, first_name, last_name, invited_by) VALUES ($1, $2, $3, $4, $5)",
      [user.email, passwordHash, user.firstName, user.lastName, invite.created_by]);
    });
}

export default async function(req, res) {
  const { id } = req.query;
  const user = JSON.parse(req.body);
  const invite = await getInvite(id);
  if (!invite) {
    res.status(404).json({ error: "Invite not found."});
  } else {
    if (user) {
      await createUser(user, invite);
      await conn.query("UPDATE invites SET claimed_by = $1, status = 'claimed' WHERE hash = $2", invite.created_by, invite.hash);
      res.status(200).json({ ok: 'ok' });
    }
  }
}