import { useState, useEffect } from "react"
import Calendar from "react-calendar"

const ReservationCalendar = ({ items, setReservation }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {

  }, [date]);

  return (
    <>
      <Calendar onChange={setDate} showFixedNumberOfWeeks/>
      <span className="flex flex-col px-4">
        <div className="flex items-center justify-center w-full">
          <button className="flex p-4 bg-red-600 rounded">
            <span className="font-bold text-white font-grotesk">Enable</span>
          </button>
        </div>
      </span>
    </>
  )
}

export default ReservationCalendar;