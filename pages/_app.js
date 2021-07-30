import "../styles/global.css"
import "../styles/hamburger.css"
import "../styles/calendar.css"

import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
