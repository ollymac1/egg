import { Box, Button, Typography } from '@mui/material'
import { FC } from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error: FC = () => {
  const error: any = useRouteError()

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      width='100%'
      flexDirection={'column'}
      height={'100vh'}
    >
      <Typography variant='h1'>Oops!</Typography>
      <Typography>Sorry, an unexpected error has occurred.</Typography>
      <Typography variant='body2'>
        {error.statusText || error.message}
      </Typography>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Button variant='contained' sx={{ mt: 2 }}>
          Go Home
        </Button>
      </Link>
    </Box>
  )
}

export default Error
