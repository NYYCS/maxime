import { useState, useEffect } from "react";
import { useRouter } from "next/router"

import Layout from "../layout/Layout"
import { signIn } from "next-auth/client"
import InputField from "../ui/InputField"
import LoginForm from "./LoginForm";


function LoginPage({ message }) {

  return (
   <Layout>
    <LoginForm message={message}/>
   </Layout>
  )


}

export default LoginPage;