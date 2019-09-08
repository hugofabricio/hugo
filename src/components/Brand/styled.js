import styled from "styled-components"
import media from "styled-media-query"

import AniLink from "gatsby-plugin-transition-link/AniLink"

export const BrandWrapper = styled.div`
  margin-right: 3rem;
`

export const BrandLink = styled(AniLink)`
  user-select: none;
  text-decoration: none;
`

export const BrandLogo = styled.h1`
  color: var(--textColor);
  font-size: 5rem;
  font-weight: 700;
  text-transform: lowercase;

  ${media.lessThan("medium")`
    font-size: 3.75rem;
  `}
`

export const BrandText = styled.span`
  display: none;
`
