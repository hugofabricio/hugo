import styled from "styled-components"

import { Link } from "gatsby"

export const ButtonLink = styled(Link)`
  cursor: pointer;
  display: block;
  user-select: none;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  line-height: 3.125rem;
  height: 3.125rem;
  color: #fff;
  background-color: #f61067;
  text-decoration: none;
  text-align: center;
  border-radius: 2.25rem;
  transition: background-color 0.5s;
  overflow: hidden;
  padding: 0 2.5rem;

  &:hover {
    background-color: #ff2477;
  }
`

export const ButtonWrapper = styled.span``
