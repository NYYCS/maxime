
const Confirmation = (formData) => {
  return (
    <div className="flex flex-col items-start justify-center h-3/4">
      <div className="flex flex-col justify-center py-8 transition-all font-grotesk">
        <div className="flex flex-row text-4xl font-bold md:text-8xl animate-fade-up">
          A reservation for {formData.guests} on
        </div>
        <div className="flex flex-row text-4xl font-bold md:text-8xl animate-fade-up">
          {new Date(formData.date).toLocaleDateString("en-gb", {day: "numeric", month: "long", year: "numeric"})} {formData.time}
        </div> 
      </div>
      <div className="flex flex-row justify-center w-full py-4 text-2xl text-gray-500 transition-all animate-fade-up md:text-4xl font-grotesk group hover:text-gray-200">
      <div className="flex px-2 py-1 text-4xl font-bold text-white transition-all border-2 border-white rounded hover:text-black hover:bg-white md:px-4 md:py-2">proceed to payment</div>
      </div>
    </div>
  )
}

export default Confirmation;