import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Intro from "../components/Intro"
import SocialMenu from "../components/SocialMenu"
import Waves from "../components/Waves"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro
      title="I'm Hugo Fabricio"
      slogan="Frontend × Backend × Aspiring Designer"
      button={{
        label: "Check my work",
        url: "/portfolio",
      }}
    />
    <SocialMenu showTitle={false} size={24} fixed={true} />
    <Waves />
  </Layout>
)

export default IndexPage
