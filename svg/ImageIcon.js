import color from 'color'

const ImageIcon = ({ mainColor, ...props }) => {
  const backgroundColor = color(mainColor).lighten(0.9).rgb().string()
  const edgeColor = color(mainColor).lighten(1.3).rgb().string()
  const mountainColor = color(mainColor).lighten(0.3).rgb().string()

  return (
    <g fill-rule="nonzero" fill="none" {...props}>
      <path fill={backgroundColor} d="M32 42H0V0h22l10 10" />
      <path fill={edgeColor} d="M30.5 11H21V1.5" />

      <g transform="translate(6 20)">
        <path fill={mainColor} d="M7 0L0 10h14" />
        <path fill={mountainColor} d="M14 3.4L9 10h10" />
        <circle fill={mainColor} cx="17.5" cy="1.5" r="1.5" />
      </g>
    </g>
  )
}

export default ImageIcon
