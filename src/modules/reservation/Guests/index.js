import { useRef, useState } from "react"
import Guestpicker from "./Guestpicker"

const Input = ({initialValue, value, onChange, toggle, placeholder}) => {
  const once = useRef(true);
  const onClick = () => {
    if (once.current) {
      once.current = false;
      if (initialValue) onChange(initialValue);
      console.log(value);
    } 
    toggle();
  }

  return (
    <input readOnly value={value} className="flex w-full px-4 py-2 mb-4 text-xl placeholder-gray-500 transition-all bg-transparent border-b-2 border-gray-500 outline-none md:mb-0 md:mr-8 animate-fade-up focus:outline-none hover:outline-none hover:border-gray-200 hover:placeholder-gray-200" onClick={onClick} placeholder={placeholder}/>
  )
} 

const Guests = ({onChange}) => {
  const [guestpickerVisible, setGuestpickerVisible] = useState(false);
  const [guests, setGuests] = useState(null);
  
  const toggleGuestpicker = () => setGuestpickerVisible(!guestpickerVisible);

  const handleGuestsChange = guest => {
    onChange(guest);
    setGuests(guest);
  }

  return (
    <div className="flex flex-col items-start justify-center h-3/4">
    <div className="flex flex-col justify-center py-8 transition-all font-grotesk">
      <div className="flex flex-row text-4xl font-bold md:text-8xl animate-fade-up">How much guests</div>
      <div className="flex flex-row text-4xl font-bold md:text-8xl animate-fade-up">are we expecting?</div>
    </div>
    <div className={`${guestpickerVisible ? "flex-guests opacity-100": "flex-0 opacity-0"} flex w-full overflow-hidden transition-all duration-500`}>
      <Guestpicker onChange={handleGuestsChange} />
    </div>
    <div className="flex flex-col items-start w-full transition-all md:flex-row">
      <Input value={`${guests ? `${guests} guests`: ""}`} toggle={toggleGuestpicker} initialValue={6} onChange={handleGuestsChange} placeholder="guests"/>
    </div>
  </div>
  )
}

export default Guests;