import { Component } from 'preact'
import {
  TimelineLite,
  // SlowMo,
  Power2
} from 'gsap'
import {
  FontIcon,
  ImageIcon,
  TextIcon,
  VideoIcon,
  Laptop,
  Video,
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

    const timeline = new TimelineLite()

    timeline
      .to(laptopDOM, 0.5, { opacity: 1, ease: Power2.easeIn })

    timeline.timeScale(this.state.timeScale)
  }

  render (props, { mainColor, timeScale }) {
    return (
      <main>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 340">
          <Laptop id="laptop" opacity="0" transform="translate(262.5, 80)" mainColor={mainColor} />
          <Content id="laptopContent" transform="translate(262, 79.5)" mainColor={mainColor} timeScale={timeScale} delay="1" />

          {/*
          <FontIcon mainColor={mainColor} />
          <ImageIcon mainColor={mainColor} />
          <TextIcon mainColor={mainColor} />
          <VideoIcon mainColor={mainColor} />
          <Text mainColor={mainColor} />
          <Headline />
          <Image mainColor={mainColor} />

          <Video mainColor={mainColor} />
          <Pipe />
          <VerticalPipe />
          <Television />
          */}
        </svg>
      </main>
    )
  }
}
