import * as React from "react"
import Layout from "./layout"
import { StaticImage } from "gatsby-plugin-image"


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

export const Head = () => <title>Home Page</title>

export default IndexPage

