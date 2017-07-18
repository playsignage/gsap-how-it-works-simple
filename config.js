import color from 'color'

const denim = color('#1565C0')
const lightSkyBlue = denim.lighten(1.1)

export const colors = {
  lightSkyBlue: lightSkyBlue.rgb().string(),
  denim: denim.rgb().string()
}

export const defaults = {
  timeScale: 1
}
