import { useState, useEffect, useReducer } from "react"
import useUpdateEffect from "../hooks/useUpdateEffect"
import compareDate from "../../lib/compareDate"

import DatePicker from "./DatePicker"
import TimePicker from "./TimePicker"
import InputField from "../ui/InputField"

function DateTimeView({ formDataRef, message, dates }) {
  const [pickerName, setPickerName] = useState("");
  const [date, setDate] = useState(formDataRef.current.date);
  const [time, setTime] = useState(formDataRef.current.time);

  const pickers = {
    date: <DatePicker disabledDates={disabledDates} key={0} value={date} onChange={setDate}/>,
    time: <TimePicker key={1} value={time} onChange={setTime}/>,
  }

  function createPickers(pickerName) {
    return Object.entries(pickers).map(([name, picker], index) => {
      return (
        <div key={index} className={`${name == pickerName ? "flex-calendar opacity-100": "flex-0 opacity-0"} w-full justify-center overflow-hidden flex transition-all duration-500`}>
          {picker}
        </div>
      )
    });
  }

  function setPicker(name) {
    return () => {
      setPickerName(pickerName == name ? "": name);
    }
  }

  useUpdateEffect(() => {
    formDataRef.current = {...formDataRef.current, date: date, time: time}
  }, [date, time]);

  function disabledDates(date) {
    return dates.some(d => compareDate(date, d)) || date.getTime() < new Date().getTime();
  }

  function ErrorMessage({error}) {
    return (
      <div className={`${error ? "flex-1 opacity-100": "flex-0 opacity-0"} flex items-center justify-start w-full p-2 transition-all duration-200`}>
        <span className="text-sm text-gray-200">{error}</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="flex text-5xl font-bold text-center md:text-7xl">When is the Reservation?</div>
      {createPickers(pickerName)}
      <div className="flex flex-col gap-4 py-4 md:flex-row">
        <span className="flex flex-col flex-1">
          <InputField value={date ? date.toLocaleDateString("en-gb", {day: "numeric", month: "long", year: "numeric"}): ""} onClick={setPicker("date")} placeholder="date" readOnly/>
          <ErrorMessage error={message.date}/>
        </span>
        <span className="flex flex-col flex-1">
          <InputField value={time} initialClick={() => setTime(time || "11:00AM")} onClick={setPicker("time")} placeholder="time" readOnly/>
          <ErrorMessage error={message.time}/>
        </span>
      </div>
    </div>
  )
}
export default DateTimeView;