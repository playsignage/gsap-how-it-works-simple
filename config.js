import color from 'color'

const denim = color('#1565C0')
const lightSkyBlue = denim.lighten(0.5)

export const colors = {
  lightSkyBlue: lightSkyBlue.rgb().string(),
  denim: denim.rgb().string()
}

export const defaults = {
  timeScale: 1
}
