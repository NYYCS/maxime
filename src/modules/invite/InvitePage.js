import { useState } from "react"

import Invite from "./Invite"
import Layout from "../layout/Layout"



function InviteList({ items = [1, 2, 3, 4, 5, 6] }) {
  const invites = items.map((item, index) => {
    return (
      <Invite key={index} {...item}/>
    )
  })

  return (
    <div className="flex flex-col items-center w-full gap-4">
      {invites}
    </div>
  );
}

function InvitePage({ user }) {
  return (
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
            <p>Invites remaining: {}</p>
            <p>Invites used: {}</p>
          </div>
          <div className="flex w-full mt-4">
            <button className="w-full p-2 font-bold rounded ring-white ring-2 hover:bg-white hover:text-black">
              create invite
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-1 w-full mt-8">
        <InviteList/>
      </div>
    </Layout>
  )
}

export default InvitePage;