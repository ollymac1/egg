import { FC, PropsWithChildren } from 'react'
import Navbar from './Navbar'
import { Box, styled } from '@mui/material'
import Footer from './Footer'

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: `calc(100vh - ${theme.spacing(13)})`,
}))

const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Navbar />
      <StyledBox>{children}</StyledBox>
      <Footer />
    </Box>
  )
}

export default Page
