import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Button = ({ url, label }) => (
  <S.ButtonLink to={url} title={label}>
    <S.ButtonWrapper>{label}</S.ButtonWrapper>
  </S.ButtonLink>
)

Button.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Button
