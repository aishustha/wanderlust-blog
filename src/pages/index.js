import * as React from "react"
import Layout from "./layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "./seo"

//Defining components
const IndexPage = () => {
  return (
    // <main style={pageStyles}>
    //   <h1 style={headingStyles}>My heart's on a wandering trail.</h1>
    //   <Link to="/about">About</Link>
    // </main>
    <Layout pageTitle="Home Page">
      <p>My heart's on a wandering trail.</p>
      <StaticImage
        alt="Whirlpool Aero Car Aerial View"
        src="../images/Aerial-View.png"
      />

      
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page"/>

export default IndexPage

