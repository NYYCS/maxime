import { useState } from "react"
import Layout from "../modules/layout/Layout"
import LoginPage from "../modules/login/LoginPage"

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
    <Layout>
      
    </Layout>
  )
}

export default LoginPage;