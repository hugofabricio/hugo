import styled from "styled-components"
import media from "styled-media-query"

export const AboutWrapper = styled.section`
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

export const AboutHeader = styled.header`
  width: 70%;
  margin-bottom: 3rem;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`

export const AboutTitle = styled.h2`
  color: var(--textColor);
  font-size: 3.75rem;
  font-weight: 700;
  margin-bottom: 1.25rem;

  ${media.lessThan("medium")`
    font-size: 2.5rem;
  `}
`

export const AboutSlogan = styled.p`
  color: var(--textColor);
  font-size: 1.125rem;
  line-height: 1.6;

  ${media.lessThan("medium")`
    font-size: 1rem;
  `}
`

export const AboutContent = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
