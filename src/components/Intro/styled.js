import styled from "styled-components"

export const IntroWrapper = styled.section`
  position: relative;
  z-index: 2;
  user-select: none;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const IntroTitle = styled.h2`
  color: var(--textColor);
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
`

export const IntroSlogan = styled.p`
  color: var(--textColor);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
`
