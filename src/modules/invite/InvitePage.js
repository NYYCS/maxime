import { useState } from "react"

import Invite from "./Invite"
import Layout from "../layout/Layout"

//const InvitePage = ({}) => {
//  return (
//    <>
//      <Navbar/>
//      <div className="flex flex-col justify-start w-full min-h-screen text-white bg-black md:items-center">
//        <div className="flex flex-col items-center justify-center p-10 mt-32">
//          <div className="flex flex-col">
//            <div className="flex text-4xl font-bold font-grotesk md:text-6xl">Invites.</div>
//            <div className="flex flex-col py-4">
//              <div className="flex font-grotesk md:text-2xl">Here you can manage and create invites.</div> 
//              <div className="flex font-grotesk md:text-2xl">To invite, simply share or copy the link to the recipient.</div>
//            </div>
//            <div className="flex py-4">
//              <div className="flex font-grotesk md:text-2xl">Unused invites will expired after a week.</div> 
//            </div>
//            <div className="flex py-4">
//              <span className="flex flex-col justify-center flex-1">
//                <div className="flex font-grotesk md:text-2xl">{`Invites remaining: ${12}`}</div>
//                <div className="flex font-grotesk md:text-2xl">{`Invites used: ${3}`}</div>
//              </span>
//              <span className="flex items-center justify-end flex-1 ">
//                <div className="flex items-center p-2 border border-white rounded text-bold font-grotesk md:text-2xl">create invite +</div>
//              </span>
//            </div>
//          </div>
//        </div>  
//        <div className="flex flex-col items-start justify-center px-8 last:mb-0 md:flex-1">
//          <Invite/>
//          <Invite/>
//          <Invite/>
//          <Invite/>
//          <Invite/>
//          <Invite/>
//          <Invite/>
//          <Invite/>
//        </div>
//      </div>
//    </>
//  )
//}


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
      <div className="flex flex-col gap-2">
        <div className="w-full text-4xl font-bold">Invites.</div>
        <div className="text-sm text-gray-400">
          <p>Here you can create and manage your invites.</p>
          <p>To invite, share the invite link to the recipient.</p> 
        </div>
        <div className="text-sm text-gray-400">
          <p>Unused invite will expired after a week.</p>
        </div>
        <div className="flex w-full mt-4">
          <button className="w-full p-2 font-bold rounded ring-white ring-2 hover:bg-white hover:text-black">
            create invite
          </button>
        </div>
      </div>
      <div className="flex flex-1 w-full mt-8">
        <InviteList/>
      </div>
    </Layout>
  )
}

export default InvitePage;