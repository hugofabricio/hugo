import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const About = ({ title, slogan }) => (
  <S.AboutWrapper>
    <S.AboutHeader>
      <S.AboutTitle>{title}</S.AboutTitle>
      <S.AboutSlogan>{slogan}</S.AboutSlogan>
    </S.AboutHeader>
    <S.AboutContent></S.AboutContent>
  </S.AboutWrapper>
)

About.propTypes = {
  title: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
}

export default About
