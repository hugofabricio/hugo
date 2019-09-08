import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const HeaderMenuWrapper = styled.nav`
  user-select: none;
  width: 550px;

  ${media.lessThan("medium")`
    width: auto;
  `}
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

  ${media.lessThan("medium")`
    align-items: center;
  `}
`

export const HeaderMenuItem = styled.li`
  line-height: 3.125rem;
  width: 50%;
  margin-right: 1rem;

  ${media.lessThan("medium")`
    &:last-of-type {
      display: none;
    }
  `}
`

export const HeaderMenuLink = styled(Link)`
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

  ${media.lessThan("medium")`
    font-size: 0.75rem;
  `}
`
