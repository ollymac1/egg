import { Box, Typography } from '@mui/material'
import { FC } from 'react'

const Footer: FC = () => {
  const now = new Date()
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        bgcolor: (theme) => theme.palette.primary.light,
        height: (theme) => theme.spacing(5),
      }}
    >
      <Typography variant='body2'>&copy; Moggs {now.getFullYear()}</Typography>
    </Box>
  )
}

export default Footer
