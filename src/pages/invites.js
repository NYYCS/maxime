import Navbar from "../modules/layout/Navbar"
import InvitePage from "../modules/invite/InvitePage"

const Invite = () => {
  return (
    <div className="flex flex-row items-center w-full p-4 mb-8 border border-white border-opacity-50 rounded-lg">
      <span className="flex flex-col items-center">
        <div className="flex flex-row">
          Created on:
        </div>
        <div className="flex flex-row">
          12-5-2021
        </div>
      </span>
      <span className="flex flex-row flex-1 px-4">ID:12937189239</span>
      <span className="flex flex-row px-4">
        <span className="material-icons">
          close
        </span>
      </span>
    </div>
  )
}

const Invites = () => {
  return (
    <div className="flex flex-col w-full text-xl">
      <Invite/>
      <Invite/>
      <Invite/>
      <Invite/>
      <Invite/>
    </div>
  )
}


const InvitePanel = () => {
  return (
    <>
      <Navbar/>
      <div className="flex flex-col items-center w-full min-h-screen text-white bg-black">
        <div className="flex flex-col w-2/3">
          <div className="flex flex-col items-center justify-center p-10 mt-40 md:mt-0">
            <div className="flex justify-start w-full py-4 text-4xl font-bold md:text-8xl font-grotesk">
              Invites.
            </div>
            <div className="flex flex-col w-full">
              <span className="flex flex-col md:flex-1">
                <div className="flex flex-col flex-wrap py-2 text-gray-200 md:text-2xl font-grotesk md:py-4">
                  <div className="flex flex-row">Here you can create and manage invites to our service.</div>
                  <div className="flex flex-row">To invite, simply share or copy the link to the recipient.</div>
                  <div className="flex flex-row">Unused invites will expire after a week.</div>
                </div>
                <span className="flex flex-row items-center md:flex-1">
                  <div className="flex flex-col flex-wrap flex-1 py-2 text-gray-200 md:text-2xl font-grotesk md:py-4">
                    <span className="flex flex-col flex-1">
                      <div className="flex flex-row font-bold">Invites remaining: 12</div>
                      <div className="flex flex-row font-bold">Invites used: 3</div>
                    </span>
                  </div>
                  <div className="flex flex-row flex-wrap items-center flex-1 py-2 text-gray-200 md:text-2xl font-grotesk md:py-4">
                    <div className="flex px-2 py-1 font-bold text-white transition-all border-2 border-white rounded hover:text-black hover:bg-white md:px-4 md:py-2">create invite +</div>
                  </div>
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center p-10 font-grotesk md:flex-1">   
            <Invites/>   
          </div>
        </div>
      </div>
    </>
  )
}

export default InvitePage;