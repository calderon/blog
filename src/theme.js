const palette = {
  primary: "#1B325F",
  secondary: "#9CC4E4",
  tertiary: "#E9F2F9",
  quaternary: "3A89C9",
  quinary: "#f26c4f",
}

const colors = {
  bright: "#fff",
  light: "#f2f2f2",
  dark: palette.primary,
}

const font = {
  base: "'Clear Sans', Arial, sans-serif",
  alternative: "'Cooper Hewitt', Arial, sans-serif",
}

const breakpoints = {
  xs: 480,
  s: 640,
  m: 768,
  l: 840,
  xl: 1024,
}

const theme = { palette, colors, font, breakpoints }

export default theme
