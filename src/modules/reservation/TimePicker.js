import { useState } from "react"
import { useUpdateEffect } from "../hooks/useUpdateEffect";


function TimePicker({ value = "11:00AM", onChange }) {
  const times = ["11:00AM", "12:00PM", "06:00PM"];


  const [time, setTime] = useState(value);
  const [index, setIndex] = useState(times.indexOf(value));
  
  const [min, setMin] = useState(index == 0);
  const [max, setMax] = useState(index == times.length - 1);

  useUpdateEffect(() => {
    if (min != (index == 0)) setMin(!min);
    if (max != (index == times.length - 1)) setMax(!max);
    setTime(times[index]);
    onChange(time);
  }, [index]);

  function nextTime() {
    if (!max) setIndex(index + 1);
  }

  function prevTime() {
    if (!min) setIndex(index - 1);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 py-4">
      <div className="flex flex-row items-center w-full justify-evenly">
        <button onClick={prevTime}>{"<"}</button>
        <span className="text-xl md:text-2xl">{time}</span>
        <button onClick={nextTime}>{">"}</button>
      </div>
    </div>
  )
}

export default TimePicker;