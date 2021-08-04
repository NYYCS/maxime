
function AboutCard() {
  return (
    <div className="flex flex-col w-full h-screen md:flex-row">
      <div className="flex flex-col items-center justify-center flex-1 p-4 md:p-10">
        <div className="flex flex-1 w-full bg-gray-100"/>
      </div>
      <div className="flex flex-col flex-1 p-4 md:justify-center md:p-10">
        <div className="flex flex-col items-start gap-4">
          <div className="text-4xl font-bold md:text-6xl">About.</div>
          <div className="text-base md:text-xl">
            We are a small restaurant operating under the premise of
            providing our private customers with exquisite culinary experience.
          </div>
          <button className="w-full p-2 mt-4 rounded before:font-bold ring-white ring-2 hover:bg-white hover:text-black">
            place reservation
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutCard;