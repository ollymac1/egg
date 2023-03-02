import {
  Box,
  Button,
  Icon,
  Paper,
  Skeleton,
  Typography,
  styled,
} from '@mui/material'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined'
import { HomeRepairServiceRounded } from '@mui/icons-material'

const MyButton = styled(Button)({
  backgroundColor: 'pink',
})

function App() {
  return (
    <Box
      width={'100%'}
      display='flex'
      justifyContent={'center'}
      alignItems={'center'}
      height={'100vh'}
      flexDirection={'column'}
    >
      <Paper sx={{ padding: (theme) => theme.spacing(20) }}>
        <AcUnitOutlinedIcon />
        <HomeRepairServiceRounded />
        <Box display={'flex'} gap={1} flexDirection={'column'}>
          Name
          <Skeleton width={200} height={50} />
          Age
          <Skeleton width={200} height={50} />
          <Skeleton width={200} height={50} />
        </Box>
        <MyButton fullWidth variant='contained'>
          Help
        </MyButton>
      </Paper>
    </Box>
  )
}

export default App
