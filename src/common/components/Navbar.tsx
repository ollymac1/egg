import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material'
import { FC, PropsWithChildren } from 'react'
import logo from '../../assets/logo.svg'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { bgcolor, styled } from '@mui/system'

// TEST DATA
// TypeScript Variable Type Annotations/Declaration:
type User = {
  firstName: string
  lastName: string
  img: string
}

const user: User = {
  firstName: 'Rhys',
  lastName: 'Morgan',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbM6F9wFPiIDQ6gmOBemRWnsksk_vU1ZnMZ6Ll-tkdPw&s',
}

const Navbar: FC = () => {
  return (
    <Box>
      <Box borderBottom={0.5} borderColor={'lightgrey'}>
        <Container maxWidth='xl'>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Box display={'flex'} alignItems={'center'}>
              <img src={logo} height={'60px'} />
              <Typography fontSize={25}>Stawk</Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'} gap={3}>
              <Badge badgeContent={4} color='primary'>
                <NotificationsNoneOutlinedIcon />
              </Badge>

              <Avatar src={user.img} />
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ boxShadow: 'rgb(58 53 65 / 42%) 0px 4px 8px -4px' }}>
        <Container maxWidth='xl'>
          <Box py={1}>
            <NavButton>
              <HomeOutlinedIcon fontSize='small' />
              <Typography>Dashboard</Typography>
              <KeyboardArrowDownOutlinedIcon fontSize='small' />
            </NavButton>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Navbar

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.grey[700],
  textTransform: 'none',
  padding: '10px 20px',
  borderRadius: 20,
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
}))

const NavButton: FC<PropsWithChildren> = ({ children }) => (
  <StyledButton>
    <Box display={'flex'} alignItems={'center'} gap={0.5}>
      {children}
    </Box>
  </StyledButton>
)
