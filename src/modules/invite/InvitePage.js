import { useState, useEffect } from "react"

import Invite from "./Invite"
import Layout from "../layout/Layout"
import ProtectedRoute from "../protected/ProtectedRoute"




function InviteList({ items = [1, 2, 3, 4, 5, 6] }) {
  const invites = items.map((item, index) => {
    return (
      <Invite key={index} invite={item}/>
    )
  })

  return (
    <div className="flex flex-col items-center w-full gap-4">
      {invites}
    </div>
  );
}

function InvitePage() {
  const [invites, setInvites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/user/invites")
      .then(res => res.json())
      .then(data => data.invites)
      .then(invs => {
        setInvites(invs);
        setLoading(false);
      });
  }, []);

  async function createInvite() {
    await fetch("/api/user/invite")
      .then(res => res.json())
      .then(data => data.invite)
      .then(inv => {
        setInvites([inv, ...invites])
      });
  }

  if (loading) return <Layout/>

  return (
    <ProtectedRoute>
      <Layout>
        <div className="flex flex-row items-center justify-center w-full py-8 mt-20 border-b md:justify-start">
          <div className="flex flex-col gap-2">
            <div className="w-full text-4xl font-bold">Invites.</div>
            <div className="text-sm md:text-base">
              <p>Here you can create and manage your invites.</p>
              <p>To invite, share the invite link to the recipient.</p> 
            </div>
            <div className="text-sm md:text-base">
              <p>Unused invite will expired after a week.</p>
            </div>
            <div className="text-sm font-bold md:text-base">
              <p>Invites remaining: {15 - invites?.length || 0}</p>
              <p>Invites used: {invites?.filter(inv => inv.status != "unused")?.length || 0}</p>
            </div>
            <div className="flex w-full mt-4">
              <button onClick={createInvite} className="w-full p-2 font-bold rounded ring-white ring-2 hover:bg-white hover:text-black">
                create invite
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 w-full mt-8">
          <InviteList items={invites}/>
        </div>
      </Layout> 
    </ProtectedRoute>
  )
}

export default InvitePage;