import styled from "styled-components"

export const SocialLinksWrapper = styled.nav`
  margin: 3rem auto;
  width: 100%;
  position: fixed;
  z-index: 2;
  bottom: 0;
`

export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`

export const SocialLinksItem = styled.li`
  margin: 0 1rem;
`

export const SocialLinksLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #f61067;
  }
`
export const SocialIconWrapper = styled.div`
  fill: #fff;
  width: ${props => (props.size ? props.size : 30)}px;
  height: ${props => (props.size ? props.size : 30)}px;
`
