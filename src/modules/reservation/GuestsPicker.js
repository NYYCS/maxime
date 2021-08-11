import { useState } from "react" 
import useUpdateEffect from "../hooks/useUpdateEffect"

function GuestPicker({ value, onChange }) {
  
  const [guest, setGuest] = useState(value || 6);
  
  const [min, setMin] = useState(guest == 6);
  const [max, setMax] = useState(guest == 14);

  useUpdateEffect(() => {
    if (min != (guest == 6)) setMin(!min);
    if (max != (guest == 14)) setMax(!max);
    onChange(guest)
  }, [guest]);

  function addGuest() {
    if (!max) setGuest(guest + 1);
  }

  function minusGuest() {
    if (!min) setGuest(guest - 1);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 py-4">
      <div className="flex flex-row items-center w-full justify-evenly">
        <span className="text-xl md:text-2xl">{`${guest} guests`}</span>
        <button onClick={addGuest}>{"+"}</button>
        <button onClick={minusGuest}>{"-"}</button>
      </div>
    </div>
  )
}

export default GuestPicker;