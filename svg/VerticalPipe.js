import variables from '../variables'

const VerticalPipe = ({ customWidth = 2, customHeight = 100, ...props }) => {
  const movingVerticalPipeLength = 10
  const ContainingRect = (props) => (<rect {...props} fill={variables.lightSkyBlue} x="0" y="0" width={customWidth} height={customHeight} />)

  return (
    <g {...props}>
      <ContainingRect />

      <g>
        <rect fill={variables.denim} x="0" y="0" height={movingVerticalPipeLength} width={customWidth} />
        <animateMotion dur="1s" repeatCount="indefinite">
          <mpath xlinkHref="#verticalpipeMotionPath" />
        </animateMotion>
      </g>

      <path d={`M0,0 0,${customHeight - movingVerticalPipeLength}`} id="verticalpipeMotionPath" />
    </g>
  )
}

export default VerticalPipe
