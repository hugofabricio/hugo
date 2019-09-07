import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Button = ({ url, label, activeClassName }) => (
  <S.ButtonLink
    paintDrip
    hex="#F61067"
    to={url}
    title={label}
    activeClassName={activeClassName}
  >
    <S.ButtonWrapper>{label}</S.ButtonWrapper>
  </S.ButtonLink>
)

Button.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Button
