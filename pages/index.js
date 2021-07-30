import ScrollAnimation from "react-animate-on-scroll"

import Navbar from "../components/navbar"

import Image from "next/image"

export default function Index() {
  return (
    <>
      <Navbar />
      <div className="flex w-screen h-screen text-white bg-black">
        <div className="absolute z-10 flex flex-col items-start justify-center w-full h-screen p-8">
          <div className="flex text-6xl md:text-8xl font-grotesk animate-fade-down">Exclusive</div>
          <div className="flex flex-wrap text-6xl md:text-8xl font-grotesk animate-fade-up">Dining Experience</div>
        </div>
      </div>
      <div className="flex flex-col justify-start w-full h-screen p-10 overflow-hidden text-white bg-black md:flex-row">
        <div className="flex flex-col justify-center flex-1">
          <ScrollAnimation animateIn="animate-fade-down">
            <div className="flex w-full h-full bg-gray-50"/>
          </ScrollAnimation>
        </div>
        <div className="flex flex-col justify-center flex-1 md:p-10">
          <ScrollAnimation animateIn="animate-fade-down">
            <div className="flex justify-start py-4 text-4xl font-bold md:text-8xl font-grotesk">
              About.
            </div>
            <div className="flex flex-wrap py-2 text-gray-200 md:text-2xl font-grotesk md:py-4">
              We are a small restaurant operating under the premise of
              providing our private customers with exquisite culinary experience.
            </div>
            <div className="flex flex-wrap py-2 text-gray-200 md:text-2xl font-grotesk md:py-4">
              Services are only provided through a invitational basis.
            </div>
            <div className="flex flex-row py-4 text-gray-500 transition-all md:text-2xl font-grotesk group hover:text-gray-200">
              <div className="flex px-4 py-2 font-bold text-white transition-all border-2 border-white rounded hover:text-black hover:bg-white">place reservation</div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className="flex flex-col justify-start w-full h-screen p-10 overflow-hidden text-white bg-black md:flex-row-reverse">
        <div className="flex flex-col justify-center flex-1">
          <ScrollAnimation animateIn="animate-fade-left">
            <div className="flex w-full h-full bg-gray-50"/>
          </ScrollAnimation>
        </div>
        <div className="flex flex-col justify-center flex-1 md:p-10">
          <ScrollAnimation animateIn="animate-fade-down">
            <div className="flex justify-start py-4 text-4xl font-bold md:text-8xl font-grotesk">
              Menu.
            </div>
            <div className="flex flex-wrap py-2 text-gray-200 md:text-2xl font-grotesk md:py-4">
              Explore our catalogue of delicate cuisine 
              masterfully prepared by our chefs. 
            </div>
            <div className="flex flex-row py-4 text-gray-500 transition-all md:text-2xl font-grotesk group hover:text-gray-200">
              <div className="flex px-4 py-2 font-bold text-white transition-all border-2 border-white rounded hover:text-black hover:bg-white">view menu</div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
}