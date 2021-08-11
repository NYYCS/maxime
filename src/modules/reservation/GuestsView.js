import { useState } from "react"
import useUpdateEffect from "../hooks/useUpdateEffect"

import GuestPicker from "./GuestsPicker"
import InputField from "../ui/InputField"

function GuestView({ formDataRef, message }) {
  const [pickerName, setPickerName] = useState("");
  const [guest, setGuest] = useState(formDataRef.current.guest);
  
  const pickers = {
    guest: <GuestPicker key={0} value={guest} onChange={setGuest}/>,
    guest32: <GuestPicker key={0} value={6} onChange={setGuest}/>,
  }

  function createPickers(pickerName) {
    return Object.entries(pickers).map(([name, picker], index) => {
      return (
        <div key={index} className={`${name == pickerName ? "flex-1 opacity-100": "flex-0 opacity-0"} w-full justify-center overflow-hidden flex transition-all duration-500`}>
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
    formDataRef.current = {...formDataRef.current, guest: guest}
  }, [guest]);


  function ErrorMessage({error}) {
    return (
      <div className={`${error ? "flex-1 opacity-100": "flex-0 opacity-0"} flex items-center justify-start w-full p-2 transition-all duration-200`}>
        <span className="text-sm leading-4 text-gray-200">{error ? error: " "}</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center max-w-screen-sm">
      <div className="flex text-5xl font-bold text-center md:text-7xl">How much guest are we expecting?</div>
      {createPickers(pickerName)}
      <div className="flex flex-col gap-4 py-4 duration-500 md:flex-row">
        <span className="flex flex-col flex-1">
          <InputField value={guest ? `${guest} guests`: ""} initialClick={() => setGuest(guest || 6)} onClick={setPicker("guest")} placeholder="guests" readOnly/>
          <ErrorMessage error={message.guest}/>
        </span>
      </div>
    </div>
  )
}
export default GuestView;