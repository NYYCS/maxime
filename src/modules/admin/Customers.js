import { useState, useEffect } from "react"
import Customer from "./Customer"

const Customers = ({ items }) => {
  const [query, setQuery] = useState("");


  function listCustomer(customers) {
    return customers.map((item, index) => <Customer key={index} user={item}/>)
  }

  return (
    <span className="flex flex-col flex-1 p-10 overflow-y-hidden">
      <div className="py-4 text-4xl font-bold font-grotesk">Customers</div>
      <div className="flex flex-row items-center p-4 mb-4 bg-white">
        <span className="material-icons-outlined">
          search
        </span>
        <input type="search" className="flex flex-1 px-2 hover:outline-none focus:outline-none" placeholder="Search" onChange={e => setQuery(e.target.value)}/>
      </div>
      <div className="flex flex-col flex-1 p-4 overflow-y-scroll border rounded">
        {listCustomer(items)}
      </div>
    </span>
  )
}

export default Customers;