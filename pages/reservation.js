
import { Component, useState } from "react"
import { useUpdateEffect } from "../src/hooks"

import Navbar from "../components/navbar"
import DateTime from "../components/reservation/Datetime"
import Guests from "../components/reservation/Guests"
import Confirmation from "../components/reservation/Confirmation"

const Reservation = () => {
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: null,
  });
  
  const [max, setMax] = useState(false);
  const [min, setMin] = useState(true);

  const [transition, setTransition] = useState(false);


  const handleDateTimeChange = (dateTime) => {
    const [date, time] = dateTime;
    const data = {...formData};
    if (date) data.date = date.getTime();
    if (time) data.time = time;
    setFormData(data);
  }

  const handleGuestsChange = (guests) => {
    setFormData({...formData, guests: guests});
  }

  const views = [
    <DateTime onChange={handleDateTimeChange}/>, 
    <Guests onChange={handleGuestsChange}/>,
    <Confirmation {...formData} />
  ]

  const viewValidate = [
    () => formData.date && formData.time,
    () => formData.guests !== null,
    () => true,
  ]

  const [view, setView] = useState(views[0]);

  useUpdateEffect(() => {
    setTransition(true);
    if (max != (index == views.length - 1)) setMax(!max);
    if (min != (index == 0)) setMin(!min);
    setTimeout(() => {
      setTransition(false);
      setView(views[index]);
    }, 150);
  }, [index]);

  const prev = () => {
    if (!min) setIndex(index - 1);
  }

  const next = () => {
    console.log(formData);
    if (!max && viewValidate[index]()) setIndex(index + 1);
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-screen h-screen text-white bg-black font-grotesk">
        <div className={`${transition ? "opacity-0": "opacity-100"} z-10 flex flex-col items-center justify-center flex-1 h-screen p-8 transition-all`}>
          {view}
        </div>
        <div className="flex flex-row w-full p-8">
           <span className="flex flex-row justify-start flex-1" onClick={prev}>
             <button className="flex flex-row text-xl text-gray-500 transition-all border-b border-gray-500 hover:border-gray-200 hover:text-gray-200">back</button>
           </span>
           <span className="flex flex-row justify-end flex-1" onClick={next}>
             <button className="flex flex-row text-xl text-gray-500 transition-all border-b border-gray-500 hover:border-gray-200 hover:text-gray-200">next</button>
           </span>
        </div>
      </div>
   </>
  );
}

export default Reservation;