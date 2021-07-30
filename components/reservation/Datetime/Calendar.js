import { useState } from "react"


const Card = ({date, disabled, active, onClick}) => {
  return (
    <button className={`${active ? "text-white": disabled ? "text-gray-700": "text-gray-500 hover:text-white"} flex flex-col flex-1 items-center transition-all justify-center`} onClick={disabled ? undefined: onClick}>
      <div className="flex text-sm font-bold uppercase">{date.toLocaleDateString("en-gb", { weekday: "short" })}</div>
      <div className="flex items-center justify-center md:text-2xl">{date.getDate()}</div>
    </button>
  )
}


const Calendar = ({initialDate, disable, onChange}) => {
  const [activeDate, setActiveDate] = useState(null);
  const [viewDate, setViewDate] = useState(initialDate || new Date());

  const onClick = (date) => {
    return () => {
      setActiveDate(date);
      onChange(date);
    }
  }

  const View = ({startDate}) => {
    return [...Array(7).keys()].map(i => {
      const date = new Date(startDate.valueOf());
      date.setDate(date.getDate() + i - startDate.getDay() + 1);
      return <Card key={i} date={date} onClick={onClick(date)} disabled={disable(date)} active={
        date.getTime() === (activeDate ? activeDate.getTime() : null)
      }/>
    });
  }

  const jump = (day) => {
    const date = new Date(viewDate.valueOf());
    date.setDate(date.getDate() + day);
    setViewDate(date);
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center w-full fl-x-row md:text-xl text">
        {viewDate.toLocaleDateString("en-gb", { month: "long", year: "numeric" })}
      </div>
      <div className="flex flex-row w-full py-4 justify-evenly">
        <button className="flex items-center justify-center flex-1 font-thin text" onClick={() => jump(-7)}>{"<"}</button>
        <View startDate={viewDate}/>
        <button className="flex items-center justify-center flex-1 font-thin text" onClick={() => jump(7)}>{">"}</button>
      </div>
    </div>
  )
};

export default Calendar;