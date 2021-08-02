import { useState, useEffect } from "react" 
import { useUpdateEffect } from "../../hooks";

const Button = ({label, active, onClick}) => {
  return (
    <span className={`${active ? "text-gray-300 hover:text-gray-200": "text-gray-800"} flex flex-row items-center justify-center px-4 text-2xl font-bold transition-all`} onClick={onClick}>
      {label}
    </span>
  );
}

const Timepicker = ({onChange}) => {

  const times = ["11:45AM", "02:00PM", "04:00PM"];

  const [index, setIndex] = useState(0);
  const [max, setMax] = useState(false);
  const [min, setMin] = useState(true);

  
  useUpdateEffect(() => {
    if (max != (index == times.length - 1)) setMax(!max);
    if (min != (index == 0)) setMin(!min);
    onChange(times[index]);
  }, [index]);

  const prev = () => {
    if (!min) setIndex(index - 1);
  }

  const next = () => {
    if (!max) setIndex(index + 1);
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-row items-center w-full py-10 font-bold font-grotesk justify-evenly">
        <Button label="<" active={!min} onClick={prev}/>
        <span className="flex text-4xl">{times[index]}</span>
        <Button label=">" active={!max} onClick={next}/>
      </div>
    </div>
  )
};

export default Timepicker;