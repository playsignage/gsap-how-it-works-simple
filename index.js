import { Component } from 'preact'
import { TimelineLite, SlowMo, Power2 } from 'gsap'
// import {
//   FontIcon,
//   ImageIcon,
//   TextIcon,
//   VideoIcon,
//   Document,
//   Headline,
//   Image,
//   Laptop,
//   LaptopContents,
//   Video,
//   Pipe,
//   VerticalPipe,
//   Screen,
//   PortraitScreen
// } from './svg'
import { colors, defaults } from './config'
import { qs } from './helpers'

export default class App extends Component {
  componentDidMount () {
    // const iconGroupDOM = qs('#iconGroup')

    const timeline = new TimelineLite()

    // timeline
    //   .from(textIconDOM, 0.5, { opacity: 0, rotation: -3, scale: 2, ease: Power2.easeIn })

    timeline.timeScale(config.timeScale)
  }

  render () {
    return (
      <main>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 340" />
      </main>
    )
  }
}
