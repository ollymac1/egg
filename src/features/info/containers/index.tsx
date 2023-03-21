import { Typography } from '@mui/material'
import { FC } from 'react'
import Page from '../../../common/components/Page'
import Counter from '../components/Counter'
import Users from '../components/Users'

const Info: FC = () => {
  return (
    <Page>
      <Typography variant='h1' textAlign={'center'}>
        Info
      </Typography>
      <Counter name='dai' age={7} />
      <Users />
    </Page>
  )
}

export default Info
