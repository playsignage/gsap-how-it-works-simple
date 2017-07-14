import { Component } from 'preact'
import uuid from 'uuid'
import { colors } from '../config'

export default class Pipe extends Component {
  constructor () {
    super()

    this.state = {
      internalId: uuid().replace(/-/g,'')
    }
  }

  render ({ customWidth = 100, customHeight = 2, customDuration = 2, customDelay = 1, ...props }, { internalId }) {
    const movingPipeLength = 10
    const ContainingRect = (props) => (<rect {...props} fill={colors.lightSkyBlue} x="0" y="0" width={customWidth} height={customHeight} />)

    return (
      <g {...props}>
        <ContainingRect />

        <g>
          <rect fill={colors.denim} x="0" y="0" width={movingPipeLength} height={customHeight}>
            <animate attributeType="XML" attributeName="opacity" values="0.5;1;0" dur={`${customDuration}s`} repeatCount="indefinite" />
          </rect>

          <animateMotion dur={`${customDuration}s`} repeatCount="indefinite">
            <mpath xlinkHref={`#pipeMotionPath${internalId}`} />
          </animateMotion>
        </g>

        <path d={`M0,0 ${customWidth - movingPipeLength},0`} id={`pipeMotionPath${internalId}`} />
      </g>
    )
  }
}
