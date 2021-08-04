import { useState } from "react"

import DatePicker from "./Datepicker"
import TimePicker from "./Timepicker"
import InputField from "./InputField"

function DateTimeView({ formData, setFormData }) {
  const [pickerName, setPickerName] = useState("");
  const pickers = {
    date: <DatePicker key={2} onChange={date => setFormData({...formData, date: date})}/>,
    time: <TimePicker key={2} onChange={time => setFormData({...formData, time: time})}/>,
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

  return (
    <div className="flex flex-col justify-center">
      <div className="flex text-5xl font-bold text-center md:text-7xl">When is the Reservation?</div>
      {createPickers(pickerName)}
      <div className="flex flex-col gap-4 py-4 duration-500 md:flex-row">
        <span className="flex flex-1">
          <InputField onClick={setPicker("date")} placeholder="date" readOnly/>
        </span>
        <span className="flex flex-1">
          <InputField onClick={setPicker("time")} placeholder="time" readOnly/>
        </span>
      </div>
    </div>
  )
}
export default DateTimeView;