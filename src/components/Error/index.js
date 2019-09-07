import React from "react"

import * as S from "./styled"

const Error = () => (
  <S.ErrorWrapper>
    <S.ErrorHeader>
      <S.ErrorTitle>Error 404</S.ErrorTitle>
      <S.ErrorSlogan>Ops, page not found.</S.ErrorSlogan>
    </S.ErrorHeader>
  </S.ErrorWrapper>
)

export default Error
