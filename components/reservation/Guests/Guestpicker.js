import { useState } from "react"
import { useUpdateEffect } from "../../../src/hooks"

const Button = ({label, active, onClick}) => {
  return (
    <span className={`${active ? "text-gray-300 hover:text-gray-200": "text-gray-800"} flex flex-row items-center justify-center px-4 text-2xl font-bold transition-all`} onClick={onClick}>
      {label}
    </span>
  );
}

const Guestpicker = ({onChange}) => {
  const [guests, setGuests] = useState(6);
  const [max, setMax] = useState(false);
  const [min, setMin] = useState(true);

  useUpdateEffect(() => {
    if (max != (guests == 14)) setMax(!max);
    if (min != (guests == 6)) setMin(!min);
    onChange(guests);
  }, [guests]);


  const add = () => {
    if (!max) setGuests(guests + 1);
  }

  const subtract = () => {
    if (!min) setGuests(guests - 1);
  }


  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-row items-center justify-center w-full font-bold font-grotesk">
        <span className="flex flex-row items-center justify-center px-8 text-2xl md:text-3xl">
          {`${guests} guests`}
        </span>
        <Button label="+" active={!max} onClick={add}/>
        <Button label="-" active={!min} onClick={subtract}/>
      </div>
    </div>
  )
}

export default Guestpicker;