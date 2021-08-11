import getDatabase from "../../../lib/getDatabase"

async function getInvite(hash) {
  const conn = getDatabase();
  const invite = await conn.query("SELECT * FROM invites WHERE hash = $1 AND status = 'unused'", [hash])
    .then(res => res.rows[0]);
  return invite;
}

export default async function(req, res) {
  const { id } = req.query;
  const invite = await getInvite(id);
  if (!invite) {
    res.status(404).json({ error: "Invite not found."});
  } else {
    res.status(200).json({ invite });
  }
}