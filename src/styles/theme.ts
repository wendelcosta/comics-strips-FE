import { createMuiTheme } from '@material-ui/core/styles'

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    custom: {
      white: string
      blue: string
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    custom?: {
      white?: string
      blue?: string
    }
  }
}

const theme = createMuiTheme({
  custom: {
    white: '#fff',
    blue: '#013499',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'body, html, #root': {
          height: '100%',
        },
      },
    },
  },
})

export default theme
