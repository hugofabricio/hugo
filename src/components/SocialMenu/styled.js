import styled from "styled-components"

export const SocialLinksWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: ${props => (props.fixed ? "absolute" : "relative")};
  z-index: 2;
  bottom: ${props => (props.fixed ? "3rem" : "0")};
`

export const SocialLinksTitle = styled.h3`
  display: ${props => (props.showTitle ? "block" : "none")};
  color: var(--textColor);
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  margin-bottom: 1.375rem;
`

export const SocialLinksList = styled.ul`
  display: flex;
  height: ${props => (props.size ? props.size : 30)}px;
  align-items: center;
  justify-content: center;
  list-style: none;
`

export const SocialLinksItem = styled.li`
  margin-left: ${props => (props.margin ? props.margin : "1")}rem;
  margin-right: ${props => (props.margin ? props.margin : "1")}rem;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

export const SocialLinksLink = styled.a`
  color: var(--textColor);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--textColorHover);
  }
`
export const SocialIconWrapper = styled.div`
  fill: var(--textColor);
  width: ${props => (props.size ? props.size : 30)}px;
  height: ${props => (props.size ? props.size : 30)}px;
`
