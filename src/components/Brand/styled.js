import styled from "styled-components"

import AniLink from "gatsby-plugin-transition-link/AniLink"

export const BrandWrapper = styled.div``

export const BrandLink = styled(AniLink)`
  user-select: none;
  text-decoration: none;
`

export const BrandLogo = styled.h1`
  color: var(--textColor);
  font-size: 5rem;
  font-weight: 700;
  text-transform: lowercase;
`

export const BrandText = styled.span`
  display: none;
`
