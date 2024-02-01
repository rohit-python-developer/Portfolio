import { Box, Typography } from '@mui/material'
import React from 'react'
import JavascriptIcon from '@mui/icons-material/Javascript';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Experience = () => {
  return (
    <Box sx={{backgroundColor:'black',color:'white',paddingBottom:'3%',paddingTop:'2%'}}>
     <Typography sx={{fontSize:'2rem',textAlign:'center',}}>My Experience</Typography>
        <Box sx={{border:'1px solid white',borderRadius:"2%",marginInline:{xs:'4%',md:"27%"},marginBlock:'3%',padding:'2%'}}>
         <Box sx={{display:'flex',justifyContent:'space-between'}}>
         <GoogleIcon sx={{color:'red'}}/>
         <Typography >
         Lead Software Engineer at Google
         </Typography>
         <Typography>
            Nov-2019 - Present
         </Typography>
         </Box>
         <Typography sx={{marginTop:'4%',marginBottom:'3%'}}>
         contains a list of menu items. The state variable isDrawerOpen is used
          to control the opening and closing of the drawer.eel free to customize 
          the styles, content, and additional features according to your project 
          requirements.
         </Typography>

        </Box>


        <Box sx={{border:'1px solid white',marginInline:{xs:'4%',md:"27%"},marginBlock:'3%',padding:'2%'}}>
         <Box sx={{display:'flex',justifyContent:'space-between'}}>
         <YouTubeIcon sx={{color:'red'}}/>
         <Typography>
            Lead Software Engineer at Google
         </Typography>
         <Typography>
            Nov-2019 - Present
         </Typography>
         </Box>
         <Typography sx={{marginTop:'4%',marginBottom:'3%'}}>
         contains a list of menu items. The state variable isDrawerOpen is used
          to control the opening and closing of the drawer.eel free to customize 
          the styles, content, and additional features according to your project 
          requirements.
         </Typography>


        </Box>


        <Box sx={{border:'1px solid white',marginInline:{xs:'4%',md:"27%"},marginBlock:'3%',padding:'2%',marginBottom:''}}>
         <Box sx={{display:'flex',justifyContent:'space-between'}}>
         <YouTubeIcon sx={{color:'red'}}/>
         <Typography>
            Lead Software Engineer at Google
         </Typography>
         <Typography>
            Nov-2019 - Present
         </Typography>
         </Box>
         <Typography sx={{marginTop:'4%',marginBottom:'4%'}}>
         contains a list of menu items. The state variable isDrawerOpen is used
          to control the opening and closing of the drawer.eel free to customize 
          the styles, content, and additional features according to your project 
          requirements.
         </Typography>

        </Box>

    </Box>
  )
}

export default Experience
