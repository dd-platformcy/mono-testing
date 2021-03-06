import { createMuiTheme } from '@material-ui/core/styles'

declare module '@material-ui/core/styles/createPalette' {
  // Add new common colors
  interface TypeBackground {
    primary: string
    secondary: string,
    footer: string
  }
}

// Create a theme instance.
const theme = {
  name: 'Platform Theme',
  palette: {
    default: {
      light: '#F7F9FC',
      main: '#F7F9FC',
      dark: '#F7F9FC',
      contrastText: '#333333'
    },
    primary: {
      light: '#000000',
      main: '#000000',
      dark: '#000000',
      contrastText: '#FFFFFF'
    },
    secondary: {
      light: '#666666',
      main: '#666666',
      dark: '#666666',
      contrastText: '#FFFFFF'
    },
    action: {

    },
    text: {
      primary: '#333333',
      secondary: '#000000'
    },
    background: {
      default: '#FFFFFF',
      primary: '#F7F9FC',
      secondary: '#E1E6ED',
      footer: '#000000'
    }
  },
  typography: {
    h1: {
      fontSize: '30px',
      fontWeight: 700,
      letterSpacing: '0',
      lineHeight: '36px'
    },
    h2: {
      fontSize: '24px',
      fontWeight: 700,
      letterSpacing: '0',
      lineHeight: '29px'
    },
    h3: {
      fontSize: '20px',
      fontWeight: 700,
      letterSpacing: '0',
      lineHeight: '24px'
    },
    h4: {
      fontSize: '16px',
      fontWeight: 700,
      letterSpacing: '0',
      lineHeight: '19px'
    },
    h5: {
      fontSize: '15px',
      fontWeight: 700,
      letterSpacing: '0',
      lineHeight: '18px'
    },
    h6: {
      fontSize: '14px',
      fontWeight: 700,
      letterSpacing: '0',
      lineHeight: '17px'
    },
    body1: {
      fontSize: '14px',
      fontWeight: 400,
      letterSpacing: '0',
      lineHeight: '17px'
    },
    body2: {
      fontSize: '14px',
      fontWeight: 500,
      letterSpacing: '0',
      lineHeight: '17px',
      color: '#8590A0'
    },
    subtitle1: {
      fontSize: '12px',
      fontWeight: 400,
      letterSpacing: '0',
      lineHeight: '15px'
    },
    subtitle2: {
      fontSize: '12px',
      fontWeight: 500,
      letterSpacing: '0',
      lineHeight: '15px',
      color: '#8590A0'
    },
    button: {
      fontSize: '15px',
      fontWeight: 400,
      letterSpacing: '0',
      lineHeight: '18px'
    },
    caption: {
      fontSize: '16px',
      fontWeight: 700,
      letterSpacing: '0',
      lineHeight: '19px',
      color: '#C4CAD3'
    },
    overline: {
      fontSize: '14px',
      fontWeight: 400,
      letterSpacing: '0',
      lineHeight: '17px'
    },
    srOnly: {
      fontSize: '14px',
      fontWeight: 400,
      letterSpacing: '0',
      lineHeight: '17px'
    },
    fontFamily: 'Lato'
  },
  overrides: {
    root: {
      '&.MuiLink': {
        color: 'green'
      }
    },
    MuiAppBar: {
      colorPrimary: {
        // backgroundColor: '#555'
      }
    },
    MuiButton: {
      contained: {
        backgroundColor: '#F7F9FC',
        '&.Mui-disabled': {
          color: '#9DA1AA',
          backgroundColor: '#DCDEE2'
        },
        '&:hover': {
          backgroundColor: '#F7F9FC'
        }
      }
    },
    MuiLink: {
      root: {
        color: '#329BD3',
        cursor: 'pointer'
      }
    },
    MuiTypography: {
      button: {
        'text-transform': 'initial'
      },
      overline: {
        'text-transform': 'initial',
        textDecoration: 'line-through'
      }
    }
  }
}

export default createMuiTheme(theme)
