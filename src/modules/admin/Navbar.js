import { useEffect } from "react"


const Navbar = ({ setPageName }) => {

  const NavButton = ({ pageName, label }) => {
    return (
      <button className="flex items-center justify-center p-4 border-b " onClick={() => setPageName(pageName)}>
        <span className="text-xl font-bold font-grotesk">{label}</span>
      </button>
    )
  }


  return (
    <span className="flex flex-col px-4">
      <NavButton pageName="dashboard" label="Dashboard"/>
      <NavButton pageName="reservations" label="Reservations"/>
      <NavButton pageName="customers" label="Customers"/>
      <NavButton pageName="settings" label="Settings"/>
    </span>
  );
}

export default Navbar;