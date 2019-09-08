import styled from "styled-components"
import media from "styled-media-query"

export const WavesWrapper = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 60%;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  overflow: hidden;

  svg {
    height: auto;
  }

  ${media.lessThan("medium")`
    justify-content: flex-end;
  `}
`

export const WavesWrapperLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;

  ${media.lessThan("large")`
    width: 35%;
  `}

  ${media.lessThan("medium")`
    display: none;
  `}
`

export const WavesWrapperRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;

  ${media.lessThan("large")`
    width: 35%;
  `}

  ${media.lessThan("medium")`
    width: 95%;
  `}
`
