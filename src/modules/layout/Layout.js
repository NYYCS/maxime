import Navbar from "./Navbar"

function Layout({ children }) {
  return (
    <>
      <Navbar/>
      <div className="flex flex-col items-center justify-center min-h-screen px-10 text-white bg-black">
        {children}
      </div>
    </>
  )
}

export default Layout;