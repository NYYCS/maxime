import { useState } from "react"
import Navbar from "../navbar"

const Invite = () => {
  return (
    <div className="flex flex-row w-full px-2 py-4 mb-4 border border-opacity-50 rounded md:px-4">
      <span className="flex flex-col px-2">
        <div className="flex text-xs text-gray-300 md:text-base font-grotesk">Created on</div>
        <div className="flex text-xs text-white md:text-base font-grotesk">28/05/2021</div>
      </span>
      <span className="flex flex-col flex-1 px-2 md:flex-initial md:w-80">
        <div className="flex text-xs text-gray-300 md:text-base font-grotesk">Status</div>
        <div className="flex text-xs text-white md:text-base font-grotesk">• Claimed</div>
      </span>
      <span className="flex flex-row items-center px-2">
        <span className="px-2 text-base transition-all opacity-50 md:text-2xl material-icons-outlined hover:opacity-100">
          delete
        </span>
        <span className="text-base transition-all opacity-50 md:text-2xl material-icons-outlined hover:opacity-100">
          share
        </span>
      </span>
    </div>
  )
}

const InvitePage = ({}) => {
  return (
    <>
      <Navbar/>
      <div className="flex flex-col justify-start w-full min-h-screen text-white bg-black md:items-center">
        <div className="flex flex-col items-center justify-center p-10 mt-32">
          <div className="flex flex-col">
            <div className="flex text-4xl font-bold font-grotesk md:text-6xl">Invites.</div>
            <div className="flex flex-col py-4">
              <div className="flex font-grotesk md:text-2xl">Here you can manage and create invites.</div> 
              <div className="flex font-grotesk md:text-2xl">To invite, simply share or copy the link to the recipient.</div>
            </div>
            <div className="flex py-4">
              <div className="flex font-grotesk md:text-2xl">Unused invites will expired after a week.</div> 
            </div>
            <div className="flex py-4">
              <span className="flex flex-col justify-center flex-1">
                <div className="flex font-grotesk md:text-2xl">{`Invites remaining: ${12}`}</div>
                <div className="flex font-grotesk md:text-2xl">{`Invites used: ${3}`}</div>
              </span>
              <span className="flex items-center justify-end flex-1 ">
                <div className="flex items-center p-2 border border-white rounded text-bold font-grotesk md:text-2xl">create invite +</div>
              </span>
            </div>
          </div>
        </div>  
        <div className="flex flex-col items-start justify-center px-8 last:mb-0 md:flex-1">
          <Invite/>
          <Invite/>
          <Invite/>
          <Invite/>
          <Invite/>
          <Invite/>
          <Invite/>
          <Invite/>
        </div>
      </div>
    </>
  )
}

export default InvitePage;