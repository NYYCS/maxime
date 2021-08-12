import { useState, useEffect } from "react"
import { useSession } from "next-auth/client"

import Error from "next/error"

import Navbar from "./Navbar"
import Dashboard from "./Dashboard"
import Reservations from "./Reservations"
import Customers from "./Customers"


const AdminPage = () => {

  const [session, loading] = useSession();

  const [customers, setCustomers] = useState([]);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch("/api/admin/customers")
      .then(res => res.json())
      .then(data => data.users)
      .then(users => setCustomers(users));
  }, []);

  useEffect(() => {
    fetch("/api/admin/reservations")
      .then(res => res.json())
      .then(data => data.reservations)
      .then(reservations => setReservations(reservations));
  }, []);

  const [pageName, setPageName] = useState("dashboard");
  const pages = {
    "dashboard": <Dashboard reservations={reservations}/>,
    "reservations": <Reservations items={reservations}/>,
    "customers": <Customers items={customers}/>
  }
  
  if (loading) return null;

  if(session?.user.uuid != "c8289629-8a44-4654-85f6-e12c502fc272" && !loading) {
    return <Error statusCode={404}/>
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