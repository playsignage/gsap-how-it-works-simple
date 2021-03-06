import color from 'color'

const FontIcon = ({ mainColor, ...props }) => {
  const backgroundColor = color(mainColor).lighten(0.9).rgb().string()
  const edgeColor = color(mainColor).lighten(1.3).rgb().string()

  return (
    <g fill="none" fill-rule="evenodd" {...props}>
      <path fill={backgroundColor} fill-rule="nonzero" d="M32 42H0V0h22l10 10" />
      <path fill={edgeColor} fill-rule="nonzero" d="M30.5 11H21V1.5" />
      <path d="M9 31.115v-.622c.48-.006.78-.026.9-.06.12-.033.23-.097.33-.19.1-.096.244-.34.433-.737.11-.225.506-1.08 1.188-2.568l2.286-5.154c.25-.567.783-1.828 1.6-3.784h.594l3.902 9.166c.634 1.487 1.054 2.42 1.26 2.797.117.213.243.353.38.42s.447.104.928.11v.622c-.95-.06-1.615-.092-1.992-.092l-2.943.092v-.622c.682-.012 1.097-.033 1.243-.064.146-.03.245-.075.297-.133.052-.058.078-.13.078-.215 0-.134-.043-.308-.128-.52l-1.125-2.798h-5.29l-.997 2.35c-.177.42-.265.727-.265.922 0 .085.024.156.073.21.068.08.17.134.312.165.225.05.62.077 1.188.083v.622c-1.03-.055-1.8-.083-2.313-.083-.59 0-1.236.028-1.937.083zm4.25-5.127h4.615l-2.285-5.51-2.33 5.51z" fill={mainColor} />
    </g>
  )
}

export default FontIcon
