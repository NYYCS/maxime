import Navbar from "./Navbar"

function Layout({ shouldPad, children }) {
  return (
    <>
      <Navbar/>
      <div className={`${shouldPad ? "py-4 md:py-10": ""} px-4 md:px-10 flex flex-col items-center justify-center min-h-screen text-white bg-black`}>
        {children}
      </div>
    </>
  )
}

export default Layout;