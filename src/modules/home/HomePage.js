import Layout from "../layout/Layout"
import Landing from "./Landing"
import AboutCard from "./AboutCard"
import MenuCard from "./MenuCard"

function HomePage() {
  return (
    <Layout>
      <Landing/>
      <AboutCard/>
      <MenuCard/>
    </Layout>
  )
}

export default HomePage;