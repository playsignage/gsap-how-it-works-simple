import { Component } from 'preact'
import color from 'color'
import uuid from 'uuid'
import Text from './Text'
import Video from './Video'
import Headline from './Headline'
import Image from './Image'

import {
  TimelineLite,
  SlowMo
} from 'gsap'

import { qs } from '../helpers'

export default class Content extends Component {
  constructor () {
    super()

    this.state = {
      internalId: uuid()
    }
  }

  componentDidMount () {
    const { internalId } = this.state
    const { delay, timeScale } = this.props
    const qsi = (selector) => qs(`${selector}-${internalId}`) // Like qs, but appends internalId; qsi = querySelectorInternal

    const headlineDOM = qsi(`#headline`)
    const imageDOM = qsi(`#image`)
    const textDOM = qsi(`#text`)
    const videoDOM = qsi(`#video`)

    const timeline = new TimelineLite()

    timeline
      .to(headlineDOM, 0.5, { opacity: 1, y: 40, ease: SlowMo.easeIn })
      .to(imageDOM, 0.5, { opacity: 1, y: 55, ease: SlowMo.easeIn })
      .to(textDOM, 0.5, { opacity: 1, y: 57, ease: SlowMo.easeIn })
      .to(videoDOM, 0.5, { opacity: 1, x: 155.5, ease: SlowMo.easeIn })

    timeline
      .delay(parseInt(delay, 0) || 0)
      .timeScale(timeScale)
  }

  render ({ mainColor, ...props }, { internalId }) {
    const backgroundColor = color(mainColor).lighten(1.2).rgb().string()

    return (
      <g {...props}>
        <path fill="white" d="M39.363 6.217h182.31v123.1H39.364z" />
        <Headline id={`headline-${internalId}`} opacity="0" transform="matrix(1.5,0,0,1.5,50,20)" mainColor={mainColor} />

        <g id={`image-${internalId}`} opacity="0" transform="matrix(1.4,0,0,1.4,50,75)">
          <rect x="0" y="1" width="38" height="30" fill={backgroundColor} />
          <Image transform="scale(1.35, 1.4), translate(4, 6)" mainColor={mainColor} />
        </g>

        <Text id={`text-${internalId}`} opacity="0" mainColor={mainColor} transform="matrix(1.5,0,0,1.5,107,77)" />

        <g id={`video-${internalId}`} opacity="0" transform="matrix(3,0,0,2.92,150,3.5)"> {/* should be 0 */}
          <rect x="0" y="1" width="22" height="42" fill={backgroundColor} />
          <Video transform="scale(0.8), translate(2, 5)" mainColor={mainColor} />
        </g>
      </g>
    )
  }
}
