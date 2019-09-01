import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Headline from "../components/Headline"
import SocialMenu from "../components/SocialMenu"
import Waves from "../components/Waves"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Headline
      title="I'm Hugo Fabricio"
      slogan="Frontend × Backend × Aspiring Designer"
      button={{
        label: "Check my work",
        url: "/portfolio",
      }}
    />
    <Waves />
    <SocialMenu size="24" />
  </Layout>
)

export default IndexPage
