import color from 'color'

const VideoIcon = ({ mainColor, ...props }) => {
  const backgroundColor = color(mainColor).lighten(0.9).rgb().string()
  const edgeColor = color(mainColor).lighten(1.3).rgb().string()

  return (
    <g fill-rule="nonzero" fill="none" {...props}>
      <path fill={backgroundColor} d="M32 42H0V0h22l10 10" />
      <path fill={edgeColor} d="M30.5 11H21V1.5" />
      <path fill={mainColor} d="M22 25l-10-6v12" />
    </g>
  )
}

export default VideoIcon
