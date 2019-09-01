import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Brand = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <S.BrandWrapper>
      <S.BrandLink to="/" title={title}>
        <S.BrandLogo>h.</S.BrandLogo>
      </S.BrandLink>
    </S.BrandWrapper>
  )
}

export default Brand
