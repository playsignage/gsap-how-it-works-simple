import { Component } from 'preact'
import {
  TimelineLite
  // SlowMo,
  // Power2
} from 'gsap'
import {
  FontIcon,
  ImageIcon,
  TextIcon,
  VideoIcon,
  Text,
  Headline,
  Image,
  Laptop,
  Video,
  Pipe,
  VerticalPipe,
  Television
} from './svg'

import {
  colors,
  defaults
} from './config'

// import { qs } from './helpers'

export default class App extends Component {
  constructor () {
    super();

    this.state = {
      mainColor: colors.denim
    }
  }

  componentDidMount () {
    // const iconGroupDOM = qs('#iconGroup')

    const timeline = new TimelineLite()

    // timeline
    //   .from(textIconDOM, 0.5, { opacity: 0, rotation: -3, scale: 2, ease: Power2.easeIn })

    timeline.timeScale(defaults.timeScale)
  }

  render (props, { mainColor }) {
    return (
      <main>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 340">
          <FontIcon mainColor={mainColor} />
          <ImageIcon mainColor={mainColor} />
          <TextIcon mainColor={mainColor} />
          <VideoIcon mainColor={mainColor} />
          <Text mainColor={mainColor} />
          <Headline />
          <Image mainColor={mainColor} />
          <Laptop />
          <Video mainColor={mainColor} />
          <Pipe />
          <VerticalPipe />
          <Television />
        </svg>
      </main>
    )
  }
}
