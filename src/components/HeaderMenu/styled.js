import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderMenuWrapper = styled.nav`
  user-select: none;
  width: 550px;
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
  .active {
    color: #f61067;
  }
`

export const HeaderMenuLink = styled(Link)`
  color: #fff;
  font-size: 0.875rem;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #f61067;
  }
`
