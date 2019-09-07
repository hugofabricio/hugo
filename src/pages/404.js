import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Error from "../components/Error"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Ops" body={{ class: "pink" }} />
    <Error />
  </Layout>
)

export default NotFoundPage
