import { useEffect, useState, useRef } from "react"

import Calendar from "./Calendar";
import TimePicker from "./Timepicker"


const Input = ({initialValue, value, onChange, toggle, placeholder}) => {
  const once = useRef(true);
  const onClick = () => {
    if (once.current) {
      once.current = false;
      if (initialValue) onChange(initialValue);
    } 
    toggle();
  }

  return (
    <input readOnly value={value} className="flex w-full px-4 py-2 mb-4 text-xl placeholder-gray-500 transition-all bg-transparent border-b-2 border-gray-500 outline-none md:mb-0 md:mr-8 animate-fade-up focus:outline-none hover:outline-none hover:border-gray-200 hover:placeholder-gray-200" onClick={onClick} placeholder={placeholder}/>
  )
} 

const DateTime = ({onChange}) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [timepickerVisible, setTimepickerVisible] = useState(false);

  const toggleCalendar = () => {
    setCalendarVisible(!calendarVisible);
    setTimepickerVisible(false);
  }

  const toggleTimepicker = () => {
    setTimepickerVisible(!timepickerVisible);
    setCalendarVisible(false);
  }

  useEffect(() => {
    onChange([date, time]);
  }, [onChange, date, time]); 


  return (
    <div className="flex flex-col items-start justify-center h-3/4">
      <div className="flex flex-col justify-center py-8 transition-all font-grotesk">
        <div className="flex flex-row text-6xl font-bold md:text-8xl animate-fade-up">When is the reservation?</div>
      </div>
      <div className={`${calendarVisible ? "flex-calendar opacity-100": "flex-0 opacity-0"} flex w-full overflow-hidden transition-all duration-500`}>
        <Calendar onChange={setDate} disable={date => date.getTime() < new Date().getTime()}/>
      </div>
      <div className={`${timepickerVisible ? "flex-calendar opacity-100": "flex-0 opacity-0"} flex w-full overflow-hidden transition-all duration-500`}>
        <TimePicker onChange={setTime}/>
      </div>
      <div className="flex flex-col items-start w-full transition-all md:flex-row">
        <Input value={date ? date.toLocaleDateString("en-gb", {day: "numeric", month: "long", year: "numeric"}): ""} onChange={setDate} toggle={toggleCalendar} placeholder="date"/>
        <Input value={time} initialValue={"11:45AM"} onChange={setTime} toggle={toggleTimepicker} placeholder="time"/>
      </div>
    </div>
  )
}

export default DateTime;