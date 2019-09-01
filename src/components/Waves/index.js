import React from "react"

import * as S from "./styled"
import WaveLeft from "../../images/wave-left.svg"
import WaveRight from "../../images/wave-right.svg"

const Waves = () => (
  <S.WavesWrapper>
    <S.WavesWrapperLeft>
      <WaveLeft />
    </S.WavesWrapperLeft>
    <S.WavesWrapperRight>
      <WaveRight />
    </S.WavesWrapperRight>
  </S.WavesWrapper>
)

export default Waves
