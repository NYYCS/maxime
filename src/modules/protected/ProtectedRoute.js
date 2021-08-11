import { useSession } from "next-auth/client"
import { useEffect } from "react/cjs/react.development";
import LoginPage from "../login/LoginPage"

function ProtectedRoute({ children }) {
  const [session, loading] = useSession();
  if (loading) return null
  if (!loading && !session) return <LoginPage message="Please Sign In."/>
  return (
    <>
      {children}
    </>
  )
}

export default ProtectedRoute;