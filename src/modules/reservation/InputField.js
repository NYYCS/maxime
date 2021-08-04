function InputField({value, onClick, ...inputProps }) {
  return (
    <input className="flex w-full p-2 text-sm bg-transparent border-b-2 border-gray-500 md:text-base hover:border-gray-200 hover:outline-none focus:outline-none" 
    onClick={onClick} value={value} {...inputProps}/>
  )
}

export default InputField;