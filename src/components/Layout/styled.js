import styled from "styled-components"
import media from "styled-media-query"

export const LayoutMain = styled.main`
  width: 100%;
  min-height: calc(100vh - 240px);
  overflow: hidden;

  ${media.lessThan("medium")`
    min-height: calc(100vh - 220px);
  `}
`
