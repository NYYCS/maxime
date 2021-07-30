import { useState } from "react"
import Navbar from "../components/navbar"
const Input = ({className, value, onChange, placeholder, type}) => {
  return (
    <input value={value} type={type} className={className + " flex w-full p-4 md:text-xl placeholder-gray-500 transition-all bg-transparent border-b-2 border-gray-500 outline-none animate-fade-up focus:outline-none hover:outline-none hover:border-gray-200 hover:placeholder-gray-200"} onChange={e => onChange(e.target.value)} placeholder={placeholder}/>
  )
} 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  return  (
    <>
    <Navbar />
      <div className="flex flex-col w-screen h-screen text-white bg-black font-grotesk">
        <div className="z-10 flex flex-col items-center justify-center flex-1 h-screen p-8 transition-all animate-fade-up">
        <div className="flex flex-col items-start justify-center h-3/4">
          <div className="flex flex-col justify-center py-8 transition-all font-grotesk">
            <div className="flex flex-row text-6xl font-bold md:text-8xl animate-fade-up">Welcome back</div>
          </div>
          <div className="flex flex-col items-start w-full transition-all">
            <Input type="email" className="mb-4" value={email} onChange={setEmail} placeholder="email"/>
            <Input type="password"value={password} onChange={setPassword} placeholder="password"/>
          </div>
          <div className="flex flex-row items-center w-full px-2 mt-4">
            <span className="flex flex-row flex-1 underline">Forgot Password?</span>
            <span className="flex flex-row justify-end flex-1 text-xl">{message}</span>
          </div>
          <div className="flex flex-row justify-center w-full mt-12">
            <button className="flex px-4 py-1 text-xl border-2 rounded-lg md:text-2xl md:px-8 md:py-2 hover:bg-white hover:text-black" onClick={()=> setMessage("Wrong email or password")}>Login</button>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Login;