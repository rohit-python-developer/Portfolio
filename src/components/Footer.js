import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Box sx={{height:'10%',backgroundColor:'black',color:'white',display:"flex",justifyContent:"space-between"}}>
        <Typography sx={{padding:'3%'}}>Portfolio</Typography>
        <Typography sx={{padding:'3%'}}>@2019-2023</Typography>
      </Box>
    </div>
  )
}

export default Footer
