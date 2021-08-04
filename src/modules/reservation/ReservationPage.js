import { useState } from "react"

import Layout from "../layout/Layout"
import DateTimeView from "./DateTimeView";

function ReservationPage() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
  })
  const [viewIndex, setViewIndex] = useState(0);
  const views = [
    <DateTimeView key={Math.random()} formData={formData} setFormData={setFormData}/>
  ];

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        {views[viewIndex]}
      </div>
    </Layout>
  )
}

export default ReservationPage;