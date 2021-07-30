import Navbar from "../components/navbar"


const Invites = () => {
  return (
    <div className="flex flex-row w-full md:text-2xl">
      <span className="flex flex-col">
        <div className="flex flex-row items-center w-full p-2">No.</div>
        <div className="flex flex-row items-center w-full p-2">1</div>
        <div className="flex flex-row items-center w-full p-2">2</div>
        <div className="flex flex-row items-center w-full p-2">3</div>
      </span>
      <span className="flex flex-col flex-1">
        <div className="flex flex-row items-center w-full p-2">Invite ID</div>
        <div className="flex flex-row items-center w-full p-2">
          <span className="flex flex-1">12937189239</span>
          <span className="flex">X</span>
        </div>
        <div className="flex flex-row items-center w-full p-2">
          <span className="flex flex-1">12937189239</span>
          <span className="flex">X</span>
        </div>
        <div className="flex flex-row items-center w-full p-2">
          <span className="flex flex-1">12937189239</span>
          <span className="flex">X</span>
        </div>
      </span>
    </div>
  )
}


const InvitePanel = () => {
  return (
    <>
      <Navbar/>
      <div className="absolute flex flex-col w-full min-h-screen text-white bg-black md:flex-row">  
        <div className="flex flex-col items-center justify-center p-10 mt-40 md:mt-0 md:flex-1">
          <span className="flex flex-col">
            <div className="flex justify-start py-4 text-4xl font-bold md:text-8xl font-grotesk">
              Invites.
            </div>
            <div className="flex flex-col flex-wrap py-2 text-gray-200 md:text-2xl font-grotesk md:py-4">
              <div className="flex flex-row">Here you can create and manage invites to our service.</div>
              <div className="flex flex-row">To invite, simply share or copy the link to the recipient.</div>
              <div className="flex flex-row">Unused invites will expire after a week.</div>
            </div>
            <div className="flex flex-col flex-wrap py-2 text-gray-200 md:text-2xl font-grotesk md:py-4">
              <span className="flex flex-col flex-1">
                <div className="flex flex-row font-bold">Invites remaining: 12</div>
                <div className="flex flex-row font-bold">Invites used: 3</div>
              </span>
            </div>
            <div className="flex flex-row flex-wrap items-center py-2 text-gray-200 md:text-2xl font-grotesk md:py-4">
              <div className="flex px-2 py-1 font-bold text-white transition-all border-2 border-white rounded hover:text-black hover:bg-white md:px-4 md:py-2">create invite +</div>
            </div>
          </span>
        </div>
        <div className="flex flex-col justify-center p-10 font-grotesk md:flex-1">   
          <Invites/>   
        </div>
      </div>
    </>
  )
}

export default InvitePanel;