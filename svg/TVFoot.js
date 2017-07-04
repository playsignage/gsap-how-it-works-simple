const TVFoot = (props) => (
  <g {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
        <stop stop-color="#414246" offset="0%" />
        <stop stop-color="#16151A" offset="100%" />
      </linearGradient>

      <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="b">
        <stop stop-color="#212224" offset="0%" />
        <stop offset="100%" />
      </linearGradient>
    </defs>

    <g fill-rule="nonzero" fill="none">
      <path d="M2.847 0H91.81l2.973 3.927c.255.337.153.61-.225.61H.442c-.38 0-.492-.286-.252-.638L2.847 0z" fill="url(#a)" />
      <path d="M0 4.39c0-.242.164-.44.368-.44h94.264c.203 0 .368.198.368.44V6H0V4.39z" fill="#101013" />
      <path fill="url(#b)" d="M13.466 0h67.7v2.927h-67.7z" />
    </g>
  </g>
)

export default TVFoot
