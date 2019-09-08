import styled from "styled-components"
import media from "styled-media-query"

export const ContactWrapper = styled.section`
  position: relative;
  z-index: 2;
  user-select: none;
  width: 65%;
  margin: 0 auto;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
`

export const ContactHeader = styled.header`
  width: 70%;
  margin-bottom: 3rem;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`

export const ContactTitle = styled.h2`
  color: var(--textColor);
  font-size: 3.75rem;
  font-weight: 700;
  margin-bottom: 1.25rem;

  ${media.lessThan("medium")`
    font-size: 2.5rem;
  `}
`

export const ContactSlogan = styled.p`
  color: var(--textColor);
  font-size: 1.125rem;
  line-height: 1.6;
`

export const ContactContent = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`

export const ContactCard = styled.div`
  color: var(--textColor);
  ${media.lessThan("medium")`
    margin-bottom: 2rem;
  `}
`

export const ContactCardTitle = styled.h3`
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  margin-bottom: 1.375rem;
`

export const ContactCardLink = styled.a`
  font-size: 1.375rem;
  font-weight: 700;
  letter-spacing: 0.063rem;
`
