import styled from "styled-components"

export const WavesWrapper = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 60%;
  bottom: 0;
  display: flex;
  justify-content: space-between;
`

export const WavesWrapperLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 50%;
  height: 100%;
`

export const WavesWrapperRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 50%;
  height: 100%;
`
