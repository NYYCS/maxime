
function Button({ active = true, label, onClick }) {
  return (
    <span onClick={onClick} className={`${active ? "hover:bg-white hover:text-black cursor-pointer": ""} flex justify-center w-full p-2 border-2 border-white rounded`}>{label}</span>
  )
}

export default Button;