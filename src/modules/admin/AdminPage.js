import { useState } from "react"
import { useSession } from "next-auth/client"

import Navbar from "./Navbar"
import Dashboard from "./Dashboard"
import Reservations from "./Reservations"
import Customers from "./Customers"


const AdminPage = () => {

  const [pageName, setPageName] = useState("dashboard");
  const pages = {
    "dashboard": <Dashboard/>,
    "reservations": <Reservations/>,
    "customers": <Customers/>
  }

  return (
    <div className="flex flex-row min-h-screen">
      <Navbar setPageName={setPageName}/>
      <div className="flex flex-1 bg-gray-100">
        {pages[pageName]}
      </div>
    </div>
  )
}

export default AdminPage;