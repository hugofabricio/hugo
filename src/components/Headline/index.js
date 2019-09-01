import React from "react"
import PropTypes from "prop-types"

import Button from "../Button"

import * as S from "./styled"

const Headline = ({ title, slogan, button }) => (
  <S.HeadlineWrapper>
    <S.HeadlineTitle>{title}</S.HeadlineTitle>
    <S.HeadlineSlogan>{slogan}</S.HeadlineSlogan>
    <Button url={button.url} label={button.label} />
  </S.HeadlineWrapper>
)

Headline.propTypes = {
  title: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  button: PropTypes.object,
}

export default Headline
