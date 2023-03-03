import { AppBar, Avatar, Box, Button, Toolbar } from '@mui/material'
import { FC } from 'react'
import { getAvatarInitials } from '../helpers'
import { Link } from 'react-router-dom'

// TEST DATA
type User = {
  firstName: string
  lastName: string
}

const user: User = {
  firstName: 'Rhys',
  lastName: 'Morgan',
}

const Navbar: FC = () => {
  return (
    <>
      <AppBar position='static' sx={{ height: (theme) => theme.spacing(8) }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box display={'flex'} gap={2}>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Button variant='contained' color='secondary'>
                Home
              </Button>
            </Link>

            <Link to='/account' style={{ textDecoration: 'none' }}>
              <Button variant='contained' color='secondary'>
                Account
              </Button>
            </Link>
          </Box>
          <Avatar sx={{ bgcolor: (theme) => theme.palette.primary.dark }}>
            {getAvatarInitials(user.firstName, user.lastName)}
          </Avatar>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
