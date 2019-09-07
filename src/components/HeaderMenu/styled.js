import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const HeaderMenuWrapper = styled.nav`
  user-select: none;
  width: 550px;
`

export const HeaderMenuTitle = styled.h3`
  display: none;
`

export const HeaderMenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 700;
`

export const HeaderMenuItem = styled.li`
  line-height: 3.125rem;
`

export const HeaderMenuLink = styled(AniLink)`
  color: var(--textColor);
  font-size: 0.875rem;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--textColorHover);
  }

  &.active {
    color: var(--textColorActive);
    pointer-events: none;
  }
`
