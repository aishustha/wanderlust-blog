import * as React from 'react'
import Layout from './layout'


const AboutPage = () => {
    return (
        // <main>
        //     <h1>About Wanderlust</h1>
        //     <Link to="/">Back to Home</Link>
        //     <p>She wasn't bored, just restless between adventures.</p>
        // </main>
        <Layout pageTitle="About Wanderlust">
            <p>She wasn't bored, just restless between adventures.</p>
        </Layout>
    )
}


export const Head = () => (
    <>
    <title> About Wanderlust</title>
    <meta name="description" content="Your description"/>
    </>
)
export default AboutPage