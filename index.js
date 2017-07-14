import { Component } from 'preact'
import {
  TimelineLite,
  SlowMo,
  Power2
} from 'gsap'
import {
  Laptop,
  Pipe,
  VerticalPipe,
  Television,
  Content
} from './svg'

import {
  colors,
  defaults
} from './config'

import { qs } from './helpers'

const timeline = new TimelineLite()

export default class App extends Component {
  constructor () {
    super();

    this.state = {
      mainColor: colors.denim,
      timeScale: defaults.timeScale
    }
  }

  componentDidMount () {
    const laptopDOM = qs('#laptop')
    const laptopContentDOM = qs('#laptopContent')
    const laptopAndContentDOM = qs('#laptopAndContent')
    const tvRightAndContentDOM = qs('#tvRightAndContent')
    const tvLeftAndContentDOM = qs('#tvLeftAndContent')
    const pipesDOM = qs('#pipes')

    timeline
      .to(laptopDOM, 0.5, { opacity: 1, ease: Power2.easeIn })
      .to(laptopContentDOM, 0.2, { opacity: 1, ease: Power2.easeIn })
      .to(laptopAndContentDOM, 0.5, { scale: 0.6, transformOrigin: 'center center', delay: 3, ease: SlowMo.easeOut })
      .to(tvRightAndContentDOM, 0.5, { x: 550, ease: SlowMo.easeOut }, 'tvs')
      .to(tvLeftAndContentDOM, 0.5, { x: 10, ease: SlowMo.easeOut }, 'tvs')
      .to(tvLeftAndContentDOM, 0.5, { x: 10, ease: SlowMo.easeOut }, 'tvs')
      .to(pipesDOM, 0.5, { opacity: 1 }, 'tvs+0.3')

    timeline.timeScale(this.state.timeScale)
  }

  render (props, { mainColor, timeScale }) {
    return (
      <main>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 340" width="100%">
          <g id="laptopAndContent">
            <Laptop id="laptop" opacity="0" transform="translate(268, 80)" mainColor={mainColor} />
            <Content id="laptopContent" opacity="0" transform="translate(267, 79.5)" mainColor={mainColor} timeScale={timeScale} delay="1" />
          </g>

          <g id="tvRightAndContent" transform="translate(800, 10)">
            <Television id="tvRight" />
            <Content id="tvRightContent" transform="translate(-25, -3), scale(1.18, 1.075)" mainColor={mainColor} timeScale={timeScale} delay="5.5" />
          </g>

          <g id="tvLeftAndContent" transform="translate(-240, 10)">
            <Television id="tvLeft" />
            <Content id="tvLeftContent" transform="translate(-25, -3), scale(1.18, 1.075)" mainColor={mainColor} timeScale={timeScale} delay="5.5" />
          </g>

          <g id="pipes" opacity="0">
            <Pipe transform="translate(397.5, 76), rotate(180)" customWidth="137.5" customDelay="2" />
            <Pipe transform="translate(397.5, 74)" customWidth="137.5" customDelay="2" />
            <VerticalPipe transform="translate(398, 105), rotate(180)" customHeight="30" />
          </g>
        </svg>
      </main>
    )
  }
}
