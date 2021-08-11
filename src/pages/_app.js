import "../styles/global.css"
import "../styles/hamburger.css"
import "../styles/calendar.css"
import "../styles/transitions.css"
import "../styles/spinner.css"

import Head from "next/head"
import { Provider } from "next-auth/client"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"/>
      </Head>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
