import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './app/config/theme'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './common/components/Error'
import Account from './features/account/containers'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/account',
    element: <Account />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
