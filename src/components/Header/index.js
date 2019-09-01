import React from "react"
import Brand from "../Brand"
import HeaderMenu from "../HeaderMenu"

import * as S from "./styled"

const Header = () => (
  <>
    <S.HeaderWrapper>
      <Brand />
      <HeaderMenu />
    </S.HeaderWrapper>
  </>
)

export default Header
