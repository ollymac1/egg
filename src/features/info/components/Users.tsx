import { Box, Button, Card, CircularProgress, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { User } from '../data/types'
import { styled } from '@mui/system'

const Row = styled(Box)(() => ({
  display: 'flex',
  gap: '5rem',
  justifyContent: 'space-between',
  width: '100%',
}))

//Gets users from API when component loads
//Stores users in local state
//Loop through users and render in UI
const Users = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (response.ok) {
      // if HTTP-status is 200-299
      // get the response body & set to local state
      setUsers(await response.json())
      // Set loading to false
      setLoading(false)
    } else {
      //Alert if error from endpoint
      alert('HTTP-Error: ' + response.status)
    }
  }

  const delayedGetUsers = () => {
    //setTimeout to simulate loading time - get data after 2 seconds
    setLoading(true)
    setTimeout(getUsers, 2000)
  }

  useEffect(() => {
    //Get users on mount
    delayedGetUsers()
  }, [])

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      m={1}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 5,
        }}
      >
        <Typography variant='h3' gutterBottom>
          Users
        </Typography>
        {/* Show spinner if loading */}
        {loading && <CircularProgress />}
        {/* Loop through users and return every user's name */}
        {users.length === 0 && <Typography>No users</Typography>}
        {!loading &&
          users.map((user, index) => {
            return (
              <Row key={`${index}${user.id}`}>
                <Typography> {user.name}</Typography>
                <Typography> {user.address.city}</Typography>
              </Row>
            )
          })}
        <Box
          display={'grid'}
          gridTemplateColumns={'1fr 1fr'}
          width={'100%'}
          gap={1}
          mt={2}
        >
          <Button
            variant='contained'
            disabled={users.length === 0}
            onClick={() => setUsers([])}
          >
            Clear users
          </Button>
          <Button
            disabled={users.length !== 0 || loading}
            variant='contained'
            onClick={() => delayedGetUsers()}
          >
            Fetch Users
          </Button>
        </Box>
      </Card>
    </Box>
  )
}

export default Users
