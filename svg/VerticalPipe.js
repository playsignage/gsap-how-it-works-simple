import { Component } from 'preact'
import uuid from 'uuid'
import { colors } from '../config'

export default class VerticalPipe extends Component {
  constructor () {
    super()

    this.state = {
      internalId: uuid().replace(/-/g, '')
    }
  }

  render({ customWidth = 2, customHeight = 100, customDuration = 2, customDelay = 0, ...props }, { internalId }) {
    const movingVerticalPipeLength = 10
    const ContainingRect = (props) => (<rect {...props} fill={colors.lightSkyBlue} x="0" y="0" width={customWidth} height={customHeight} />)

    return (
      <g {...props}>
        <ContainingRect />

        <g>
          <rect fill={colors.denim} x="0" y="0" height={movingVerticalPipeLength} width={customWidth}>
            <animate attributeType="XML" attributeName="opacity" values="0;1;0.5" dur={`${customDuration}s`} repeatCount="indefinite" />
          </rect>

          <animateMotion begin={customDelay} dur={`${customDuration}s`} repeatCount="indefinite">
            <mpath xlinkHref={`#verticalPipeMotionPath${internalId}`} />
          </animateMotion>
        </g>

        <path d={`M0,0 0,${customHeight - movingVerticalPipeLength}`} id={`verticalPipeMotionPath${internalId}`} />
      </g>
    )
  }
}
