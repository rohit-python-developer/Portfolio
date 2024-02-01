import { Box,Button,TextField,Typography } from '@mui/material';
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';



const Forms = () => {
    return (
    <>
    <Box sx={{display:{xs:'block',md:'flex'},marginInline:{xs:"2%",md:"8%"},marginBlock:'4%'}}>
      <Box sx={{width:{xs:'100%',md:'50%'}}}>
      <TextField id="outlined-basic"  variant="outlined" placeholder="Your Name " fullWidth sx={{border:'1px solid black'}}/>
      
      <TextField id="outlined-basic"  variant="outlined" placeholder="Email " fullWidth sx={{border:'1px solid black',marginTop:'1%'}} />
      <TextField id="outlined-basic"  variant="outlined" placeholder="Your Name " fullWidth sx={{border:'1px solid black',marginTop:'1%'}} />
      <TextField
          id="outlined-multiline-static"
          
          multiline
          rows={4}
          placeholder='How can i help?'
          fullWidth
          sx={{border:'1px solid black',marginTop:'1%'}}
          
        />
        <Box sx={{marginTop:'1%',justifyContent:'space-between'}} >
          <Button sx={{border:'1px solid black',backgroundColor:'black',padding:'1%'}}>Get In Touch</Button>
          <Button sx={{border:'1px solid black',marginInline:'4%'}}><FacebookIcon fontSize="large"/></Button>
          <Button sx={{border:'1px solid black'}}><TwitterIcon fontSize="large"/></Button>
        </Box>
      </Box>
      


      <Box sx={{width:{xs:'100%',md:'30%'},margin:'auto'}}>
         <Typography sx={{fontSize:'2rem',marginTop:'4%'}}><strong>Let's talk for</strong></Typography>
         <Typography sx={{fontSize:'2rem'}}><strong>Something </strong></Typography>
         <p>I seek to push the limits of creativity to create high-engaging, user-friendly,
          and memorable interactive experiences.</p>
          <Typography sx={{marginTop:'2px'}}><strong>Youremail@gmail.com</strong></Typography>
          <Typography><strong>+91 9988774455</strong></Typography>
      </Box>
      </Box>

      </>
    );
  };

  


export default Forms
  
