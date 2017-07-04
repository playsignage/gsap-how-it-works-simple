import color from 'color'

const Image = ({ mainColor, ...props }) => {
  const mountainColor = color(mainColor).lighten(0.3).rgb().string()

  return (
    <g fill-rule="nonzero" fill="none" {...props}>
      <path fill={mainColor} d="M7 0L0 10h14" />
      <path fill={mountainColor} d="M14 3.4L9 10h10" />
      <circle fill={mainColor} cx="17.5" cy="1.5" r="1.5" />
    </g>
  )
}

export default Image
