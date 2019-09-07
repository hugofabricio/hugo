import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import Header from "../Header"
import Footer from "../Footer"

import GlobalStyles from "../../styles/global"
import * as S from "./styled"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Header />
      </TransitionPortal>

      <S.LayoutMain>{children}</S.LayoutMain>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
