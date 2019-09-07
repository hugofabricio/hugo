import React from "react"

import * as S from "./styled"

const Brand = () => {
  return (
    <S.BrandWrapper>
      <S.BrandLink to="/" title="Hugo Fabricio">
        <S.BrandLogo>
          H<S.BrandText>ugo Fabricio</S.BrandText>.
        </S.BrandLogo>
      </S.BrandLink>
    </S.BrandWrapper>
  )
}

export default Brand
