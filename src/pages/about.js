import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import About from "../components/About"

const AboutPage = () => (
  <>
    <Layout>
      <SEO title="About me" />
      <About
        title="Hello!"
        slogan="I am a web developer with 8 years of experience delivering interface faithful to layout and semantically correct."
      />
    </Layout>
  </>
)

export default AboutPage
