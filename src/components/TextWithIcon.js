import { Box,Typography } from '@mui/material'
import React from 'react'
import rohit from "../assets/img/rohit.jpeg"
import banner from "../assets/img/Banner.png"

const TextWithIcon = () => {
    const UpImage={
        width:'100%',
        height:'60%',
        marginLeft:{xs:"0%",md:'10%'}
    }
  return (
    <>
      <Box sx={{marginInline:{xs:2,md:15},display:{xs:'block',md:'flex'},marginTop:3, marginBottom:'1%'}} >
        
        <Box sx={{backgroundColor:'white',marginLeft:{xs:0,md:6},justifyContent:'center',alignItems:'center',
        marginBlock:11,width:{xs:"85%",md:'50%'}}}>
         <Typography sx={{fontSize:'2.7rem'}}>Hello I am <strong>Rohit Gupta.</strong></Typography>
         <Typography sx={{fontSize:'2.7rem'}}><strong >Frontend</strong> Developer</Typography>
         <Typography sx={{fontSize:'2.7rem'}}> Based in <strong >India</strong> </Typography>

         <Typography sx={{fontSize:'1.2rem'}}> I am Rohit Gupta, simply this is dummy data.dgwnlk
         To use the font Icon component, you must first add the Material Icons font. Here
          are some instructions on how to do so. For instance, via Google Web
           Fonts:</Typography>

        </Box>
        <Box sx={{width:{xs:'100%',md:'45%'},display:'flex',marginTop:'6%'}}>
           
           <img src={banner} style={UpImage} alt=' hello' />
           
          
        </Box>
      </Box>
     
    </>
  )
}

export default TextWithIcon