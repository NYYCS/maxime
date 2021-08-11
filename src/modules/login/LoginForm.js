import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { signIn } from "next-auth/client"

import Button from "../ui/Button"

function InputField({ value, onChange, message, ...inputProps }) {
  return (
    <span className="flex flex-col w-full">
      <input {...inputProps} value={value} onChange={e => onChange(e.target.value)} className="flex p-2 text-sm placeholder-gray-500 bg-transparent border-b-2 border-gray-500 focus:border-gray-200 focus:placeholder-gray-200 flex-2 md:text-base hover:placeholder-gray-200 hover:outline-none focus:outline-none hover:border-gray-200"/>
    </span>
  )
}

function LoginForm({ message }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [canLogin, setCanLogin] = useState(false);
  
  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (canLogin != (email != "" && password != "")) setCanLogin(!canLogin);
  }, [email, password]);

  function login() {
    console.log("Hello");
    if (canLogin) {
      console.log("Hello");
      signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      }).then( res => {
        if (res.error) setError(res.error);
        else router.push("/");
      })
    }
  }
  
  return (
    <form className="flex flex-col items-center justify-center w-full gap-4 max-w-prose">
      <div className="text-5xl font-bold animate-fade-down md:text-7xl">{message}</div>
      <div className="flex flex-col w-full gap-4 animate-fade-right">
        <InputField value={email} onChange={setEmail} type="email" placeholder="email"/>
        <InputField value={password} onChange={setPassword} type="password" placeholder="password"/>
        <div className="flex flex-row w-full">
          <span className="flex flex-1">
            <button className="text-sm underline">Forgot Password?</button>
          </span>
          <span className="flex justify-end flex-1">
            <span className="text-sm">{error}</span>
          </span>
        </div>
      </div>
      <div className="flex w-full mt-4 duration-300 animate-fade-up">
        <Button onClick={login} label="login"/>
      </div>
    </form>
  )
}

export default LoginForm;