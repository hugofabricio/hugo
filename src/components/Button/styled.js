import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const ButtonLink = styled(AniLink)`
  cursor: pointer;
  display: block;
  user-select: none;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  line-height: 3.125rem;
  height: 3.125rem;
  color: var(--textColor);
  background-color: var(--buttonBackground);
  text-decoration: none;
  text-align: center;
  border-radius: 2.25rem;
  transition: background-color 0.5s;
  overflow: hidden;
  padding: 0 2.5rem;

  &.active {
    color: var(--buttonTextColorActive);
    background-color: var(--buttonBackgroundActive);
    pointer-events: none;
  }

  &:hover {
    color: var(--buttonTextColorHover);
    background-color: var(--buttonBackgroundHover);
  }
`

export const ButtonWrapper = styled.span``
