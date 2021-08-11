import { getSession } from "next-auth/client"
import { getInvites } from "../../../lib/user"


export default async function(req, res) {
  const session = await getSession({ req });
  if (!session) {
    res.status(400).json({error: "Unauthenticated."});
  } else {
    const invites = await getInvites(session.user.uuid);
    res.status(200).json({ invites });
  }
}