import React from "react"
import PropTypes from "prop-types"

import Button from "../Button"

import * as S from "./styled"

const Intro = ({ title, slogan, button }) => (
  <S.IntroWrapper>
    <S.IntroTitle>{title}</S.IntroTitle>
    <S.IntroSlogan>{slogan}</S.IntroSlogan>
    {button && <Button url={button.url} label={button.label} />}
  </S.IntroWrapper>
)

Intro.propTypes = {
  title: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  button: PropTypes.object,
}

export default Intro
