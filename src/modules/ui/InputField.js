import { useRef } from "react" 


function InputField({value, initialClick, onClick = () => {}, onChange = () => {}, ...inputProps}) {
  const initial = useRef(true);

  function handleClick() {
    if (initial.current && initialClick) {
      initial.current = false;
      initialClick();
    }
    console.log("called");
    onClick();
  }
  
  return (
    <input className="flex w-full p-2 text-sm bg-transparent border-b-2 border-gray-500 md:text-base hover:border-gray-200 hover:outline-none focus:outline-none" 
    onChange={e => onChange(e.target.value)} onClick={handleClick} value={value} {...inputProps}/>
  )
}



export default InputField;