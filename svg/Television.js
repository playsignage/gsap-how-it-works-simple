import TVFoot from './TVFoot'

const Television = (props) => (
  <g fill="none" fill-rule="evenodd" {...props}>
    <path d="M0 1c0-.552.443-1 .99-1h238.02c.547 0 .99.448.99 1v138c0 .552-.443 1-.99 1H.99c-.547 0-.99-.448-.99-1V1zm3.4 2.68v132.516h233.2V3.68H3.4z" fill="#17171D" fill-rule="nonzero" />
    <path fill="#FFF" d="M3.4 3.558h233.32v133.006H3.4z" />

    <TVFoot transform="translate(72, 139.8)" />
  </g>
)

export default Television
