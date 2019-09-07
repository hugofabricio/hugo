import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Contact from "../components/Contact"

const ContactPage = () => (
  <Layout>
    <SEO title="Let's talk" body={{ class: "pink" }} />
    <Contact
      title="Let's talk about everything!"
      slogan="Got an idea? A new project? Need support?<br> I will be happy to help you."
      email="me@hugofabricio.com"
      phone="83 98805-0131"
    />
  </Layout>
)

export default ContactPage
