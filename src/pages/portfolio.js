import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Portfolio from "../components/Portfolio"

const PortfolioPage = () => (
  <>
    <Layout>
      <SEO title="Portfolio" />
      <Portfolio
        title="Portfolio"
        slogan="Soon I will have a page with more details, meanwhile enjoy accessing the links below."
      />
    </Layout>
  </>
)

export default PortfolioPage
