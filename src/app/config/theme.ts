import { ThemeOptions, createTheme } from '@mui/material'

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#DECDF5',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    secondary: {
      main: '#1B998B',
    },
    info: {
      main: '#4c4c4c',
      contrastText: '#252323',
    },
    background: {
      paper: '#f5f5f5',
    },
    text: {
      primary: '#534D56',
      secondary: 'rgba(255,255,255,0.54)',
    },
    success: {
      main: '#1B998B',
    },
  },
  typography: {
    fontFamily: 'Nunito',
    body1: {
      fontFamily: 'Quicksand',
    },
    body2: {
      fontFamily: 'Quicksand',
    },
    caption: {
      fontFamily: 'Quicksand',
    },
  },
}

export const theme = createTheme(themeOptions)
