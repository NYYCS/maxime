import { useState } from "react"
import Button from "../ui/Button";

function InputField({ value, onChange, message, ...inputProps }) {
  return (
    <span className="flex flex-col w-full">
      <input {...inputProps} onChange={e => onChange(e.target.value)} className="flex p-2 text-sm placeholder-gray-500 bg-transparent border-b-2 border-gray-500 focus:border-gray-200 focus:placeholder-gray-200 flex-2 md:text-base hover:placeholder-gray-200 hover:outline-none focus:outline-none hover:border-gray-200"/>
    </span>
  )
}
function RegisterForm({ id }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  function register() {
    const formData = { id, firstName, lastName, email, password };
    console.log(formData);
    fetch(`/api/register/${id}`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then( res => res.json())
    .then( data => {if (data) setMessage(data) });
  }

  return (
    <form className="flex flex-col items-center justify-center gap-4">
      <div className="text-5xl font-bold md:text-7xl">Welcome, you have been invited</div>
      <div className="flex flex-row w-full gap-4">
        <InputField value={firstName} onChange={setFirstName} type="text" placeholder="first name"/>
        <InputField value={lastName} onChange={setLastName} type="text" placeholder="last name"/>
      </div>
      <div className="flex flex-col w-full gap-4">
        <InputField value={email} onChange={setEmail} type="email" placeholder="email"/>
        <InputField value={password} onChange={setPassword} type="password" placeholder="password"/>
      </div>
      <div className="flex w-full mt-4">
        <Button onClick={register} label="register"/>
      </div>
    </form>
  )
}

export default RegisterForm;