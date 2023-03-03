import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { useRouteError } from 'react-router-dom'

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
      <Typography>
        <Typography variant='body2'>
          {error.statusText || error.message}
        </Typography>
      </Typography>
    </Box>
  )
}

export default Error
