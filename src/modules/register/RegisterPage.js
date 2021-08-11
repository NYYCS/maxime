import RegisterForm from "./RegisterForm"
import Layout from "../layout/Layout"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

function RegisterPage() {
  const [loading, setLoading] = useState(true);
  const [invalid, setInvalid] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      fetch(`/api/invite/${router.query.id}`)
        .then(res => res.json())
        .then(data => {
        if (data && data.invite) {
          setInvalid(false);
        }
        if (data.error) {
          console.log(data.error);
        }
        setLoading(false);
      })
    }
  });
  if (loading) {
    return (
      <Layout>
        <div className="text-5xl font-bold md:text-7xl">Loading</div>
      </Layout>
    )
  }

  if (invalid) {
    return (
      <Layout>
        <div className="text-5xl font-bold md:text-7xl">Invalid Invite</div>
      </Layout>
    )
  }

  return (
      <Layout>
        <RegisterForm id={router.query.id}/>
      </Layout>
  )
}

export default RegisterPage