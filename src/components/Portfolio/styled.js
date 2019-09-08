import styled from "styled-components"
import media from "styled-media-query"

export const PortfolioWrapper = styled.section`
  position: relative;
  z-index: 2;
  user-select: none;
  width: 65%;
  margin: 0 auto;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;

  ${media.lessThan("small")`
    width: 80%;
  `}
`

export const PortfolioHeader = styled.header`
  width: 60%;
  margin-bottom: 3rem;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`

export const PortfolioTitle = styled.h2`
  color: var(--textColor);
  font-size: 3.75rem;
  font-weight: 700;
  margin-bottom: 1.25rem;

  ${media.lessThan("medium")`
    font-size: 2.5rem;
  `}
`

export const PortfolioSlogan = styled.p`
  color: var(--textColor);
  font-size: 1.125rem;
  line-height: 1.6;
`

export const PortfolioContent = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const PortfolioList = styled.ul`
  width: 100%;
  color: var(--textColor);
  columns: 3;

  ${media.lessThan("medium")`
    columns: 1;
  `}
`

export const PortfolioListItem = styled.li`
  width: 75%;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.125rem;
  margin-bottom: 1.375rem;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`

export const PortfolioListLink = styled.a`
  font-weight: 700;
  letter-spacing: 0.063rem;
`
