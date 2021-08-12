function MenuCard() {
  return (
    <div id="menu" className="flex flex-col w-full h-screen md:flex-row-reverse">
      <div className="flex flex-col items-center justify-center flex-1 p-4 md:p-10">
        <div className="flex flex-1 w-full bg-gray-100"/>
      </div>
      <div className="flex flex-col flex-1 p-4 md:justify-center md:p-10">
        <div className="flex flex-col items-start gap-4">
          <div className="text-4xl font-bold md:text-6xl">Menu.</div>
          <div className="text-base md:text-xl">
            Explore our catalogue of delicate cuisine 
            masterfully prepared by our chefs. 
          </div>
          <button className="w-full p-2 mt-4 rounded before:font-bold ring-white ring-2 hover:bg-white hover:text-black">
            view menu
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuCard;