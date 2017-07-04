import color from 'color'

const TextIcon = ({ mainColor, ...props }) => {
  const backgroundColor = color(mainColor).lighten(0.9).rgb().string()
  const edgeColor = color(mainColor).lighten(1.3).rgb().string()

  return (
    <g fill-rule="nonzero" fill="none" {...props}>
      <path fill={backgroundColor} d="M32 42H0V0h22l10 10" />
      <path fill={edgeColor} d="M30.5 11H21V1.5" />
      <g fill={mainColor}>
        <path d="M8 18h17v2H8zM8 22h13v2H8zM8 26h17v2H8zM8 30h13v2H8z" />
      </g>
    </g>
  )
}

export default TextIcon
