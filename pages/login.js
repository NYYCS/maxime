import { useState } from "react"
import Navbar from "../components/navbar"
const Input = ({value, onChange, placeholder, type}) => {
  return (
    <input value={value} type={type} className="flex w-full px-4 py-2 text-xl placeholder-gray-500 transition-all bg-transparent border-b-2 border-gray-500 outline-none md:mb-0 md:mr-8 animate-fade-up focus:outline-none hover:outline-none hover:border-gray-200 hover:placeholder-gray-200" onChange={e => onChange(e.target.value)} placeholder={placeholder}/>
  )
} 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return  (
    <>
    <Navbar />
      <div className="flex flex-col w-screen h-screen text-white bg-black font-grotesk">
        <div className="z-10 flex flex-col items-center justify-center flex-1 h-screen p-8 transition-all animate-fade-up">
        <div className="flex flex-col items-start justify-center h-3/4">
          <div className="flex flex-col justify-center py-8 transition-all font-grotesk">
            <div className="flex flex-row text-6xl font-bold md:text-8xl animate-fade-up">Welcome back</div>
          </div>
          <div className="flex flex-col items-start w-full transition-all md:flex-row">
            <Input value={email} onChange={setEmail} placeholder="email"/>
            <Input value={password} onChange={setPassword} placeholder="password"/>
          </div>
          <div className="flex flex-row items-center w-full px-10 mt-10">
            <span className="flex flex-row flex-1 underline">Forgot Password?</span>
            <span className="flex flex-row justify-end flex-1">
            <div className="flex px-2 py-1 text-xl font-bold text-white transition-all border-2 border-white rounded hover:text-black hover:bg-white md:px-4 md:py-2">login</div>
            </span>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Login;