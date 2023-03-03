import { Box, Typography } from '@mui/material'
import Page from './common/components/Page'

function App() {
  return (
    <Page>
      <Box display='flex' justifyContent={'center'} alignItems={'center'}>
        <Typography variant='h1' sx={{ margin: (theme) => theme.spacing(20) }}>
          EGG
        </Typography>
      </Box>
    </Page>
  )
}

export default App
