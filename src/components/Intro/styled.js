import styled from "styled-components"
import media from "styled-media-query"

export const IntroWrapper = styled.section`
  position: relative;
  z-index: 2;
  user-select: none;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.lessThan("medium")`
    padding-bottom: 2rem;
    align-items: flex-start;
  `}
`

export const IntroTitle = styled.h2`
  color: var(--textColor);
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 1.25rem;

  ${media.lessThan("large")`
    font-size: 3.5rem;
  `}

  ${media.lessThan("medium")`
    font-size: 2.5rem;
  `}
`

export const IntroSlogan = styled.p`
  color: var(--textColor);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;

  ${media.lessThan("large")`
    font-size: 1.5rem;
  `}

  ${media.lessThan("medium")`
    font-size: 1rem;
  `}
`
export const IntroContact = styled.div`
  display: none;
  ${media.lessThan("medium")`
    display: block;
  `}
`

export const IntroPortfolio = styled.div`
  display: block;
  ${media.lessThan("medium")`
    display: none;
  `}
`
