import { useState } from "react" 
import { useUpdateEffect } from "../hooks/useUpdateEffect"


function DatePicker({initialViewDate = new Date(), value, onChange = () => {}}) {
  const [activeDate, setActiveDate] = useState(value);
  const [viewDate, setViewDate] = useState(initialViewDate);

  function DateCard({date, active}) {
    const day = date.toLocaleDateString("en-gb", { weekday: "short"});
    const dateNum = date.getDate();

    useUpdateEffect(() => {
      onChange(activeDate);
    }, [activeDate]);

    return (
      <button className={`${active ? "text-white" : "text-gray-500"} flex flex-col items-center`} onClick={() => setActiveDate(date)}>
        <div className="text-xs uppercase">{day}</div>
        <div className="text-sm">{dateNum}</div>
      </button>
    )
  }

  function createWeek(startDate) {
    return [...Array(7).keys()].map((index) => {
      const date = new Date(startDate.valueOf());
      date.setDate(date.getDate() - startDate.getDay() + index + 1);
      return <DateCard key={index} date={date} active={activeDate ? activeDate.getTime() == date.getTime() : false}
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
