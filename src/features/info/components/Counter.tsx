import { Box, Button, Typography } from '@mui/material'
import React, { FC, useState } from 'react'

type PropTypes = {
    name: string
    age: number
}


const Counter:FC<PropTypes> = (props) => {
    const [state, setState] = useState<number>(0)
  return (
    <Box width={'100%'} textAlign={'center'} display="flex" flexDirection={'column'} justifyContent={'space-around'}>
      <Typography>
        {props.name}
      </Typography>
      <Box width={'100%'} display="flex" flexDirection={'column'} justifyContent={'space-around'}>
        <Typography>
            {state}
        </Typography>
        <Button onClick={() => (prevState:number) => setState(10)}>Click me</Button>
      </Box>
    </Box>
  )
}

export default Counter
