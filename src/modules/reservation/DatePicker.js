import { useState } from "react" 
import  useUpdateEffect from "../hooks/useUpdateEffect"
import compareDate from "../../lib/compareDate"


function DatePicker({ initialViewDate, value, onChange, disabledDates }) {
  const [activeDate, setActiveDate] = useState(value);
  const [viewDate, setViewDate] = useState(initialViewDate || new Date());

  function DateCard({date, active, disabled}) {
    const day = date.toLocaleDateString("en-gb", { weekday: "short"});
    const dateNum = date.getDate();

    return (
      <button className={`${active ? "text-white" : disabled ? "text-gray-800" : "text-gray-500"} flex flex-col items-center`} 
        onClick={() => {
          if (!disabled) setActiveDate(date);
        }}>
        <div className="text-xs uppercase">{day}</div>
        <div className="text-sm">{dateNum}</div>
      </button>
    )
  }

  useUpdateEffect(() => {
    onChange(activeDate);
  }, [activeDate]);


  function createWeek(startDate) {
    return [...Array(7).keys()].map((index) => {
      const date = new Date(startDate.valueOf());
      date.setDate(date.getDate() - startDate.getDay() + index + 1);
      return <DateCard key={index} date={date} disabled={disabledDates(date)} active={compareDate(activeDate, date)}
      />
    })
  }

  function nextWeek() {
    const date = new Date(viewDate.valueOf());
    date.setDate(date.getDate() + 7);
    setViewDate(date);
  }

  function prevWeek() {
    const date = new Date(viewDate.valueOf());
    date.setDate(date.getDate() - 7);
    setViewDate(date);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 py-4">
      <div className="flex flex-row justify-center">
        <span className="text-base">{viewDate.toLocaleDateString("en-gb", { month: "long", year: "numeric" })}</span>
      </div>
      <div className="flex flex-row items-center justify-between w-full">
        <button onClick={prevWeek}>{"<"}</button>
        {createWeek(viewDate)}
        <button onClick={nextWeek}>{">"}</button>
      </div>
    </div>
  )
}

export default DatePicker;