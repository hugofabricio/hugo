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
        slogan="I have been working as a developer since 2009 and have a lot of experience in creating interfaces that are true to layout and semantically correct."
      />
    </Layout>
  </>
)

export default AboutPage
