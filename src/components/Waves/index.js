import React, { Component } from "react"
import anime from "animejs/lib/anime.es.js"

import * as S from "./styled"
import WaveLeft from "../../images/wave-left.svg"
import WaveRight from "../../images/wave-right.svg"

class Waves extends Component {
  constructor(props) {
    super(props)
    this.waves = null
    this.wavesPath = []
  }

  componentDidMount() {
    this.wavesPath1 = Array.from(this.waves.querySelectorAll(".wave-type-1"))
    this.wavesPath2 = Array.from(this.waves.querySelectorAll(".wave-type-2"))

    let tl = anime.timeline({
      targets: this.wavesPath1,
      duration: 750,
      easing: "easeInOutQuad",
      translateY: ["100%", 0],
    })

    tl.add({
      targets: this.wavesPath2,
      duration: 1250,
      easing: "easeInOutQuad",
      translateY: ["100%", 0],
    })
  }

  render() {
    return (
      <S.WavesWrapper ref={wave => (this.waves = wave)}>
        <S.WavesWrapperLeft>
          <WaveLeft />
        </S.WavesWrapperLeft>
        <S.WavesWrapperRight>
          <WaveRight />
        </S.WavesWrapperRight>
      </S.WavesWrapper>
    )
  }
}

export default Waves
