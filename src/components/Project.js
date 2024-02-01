import { Box,Typography } from '@mui/material'
import React from 'react'
import rohit from "../assets/img/rohit.jpeg"
import project1 from "../assets/img/Project1.png"
import project2 from "../assets/img/Project2.png"
import project3 from "../assets/img/Project3.png"

const Project = () => {
    const UpImage={
        width:'100%',
        height:'60%',
        marginLeft:{xs:"0%",md:'10%'}
    }
  return (
    <>
       <Box sx={{  marginTop: "2%" }}>
        <Typography
         
          fontSize="2rem"
         
          
          textTransform="capitalize"
          
          textAlign={"center"}
          
        >
          My Projects
        </Typography>
    </Box>
    <Box sx={{backgroundColor:'black'}}>
      <Box sx={{ backgroundColor:'black', color:'white',
      marginInline:{xs:2,md:15},display:{xs:'block',md:'flex'},
      marginTop:3, marginBottom:'1%',paddingLeft:'3%'}} >
        
        
        <Box sx={{width:{xs:'100%',md:'45%'},display:'flex',marginTop:'6%'}}>
           
           <img src={project1} style={UpImage} alt=' hello' />
           
          
        </Box>

        <Box sx={{marginLeft:{xs:0,md:6},justifyContent:'center',alignItems:'center',
        marginBlock:11,width:{xs:"85%",md:'50%'}}}>
         <Typography sx={{fontSize:'2rem'}}> <strong>01</strong></Typography>
         <Typography sx={{fontSize:'2rem'}}> <strong>Crypto Screener</strong></Typography>
             <Typography sx={{marginTop:'2%'}}>
             I'm a passionate, self-proclaimed designer who specializes in
              full stack development (React.js & Node.js). I am very 
               enthusiastic about bringing the technical and visual aspects
                of digital products to life. User experience, pixel perfect
                 design, and writing clear, readable, highly performant 
                 code matters to me.I began my journey as a web developer 
                 in 2015, and since then,
                
                  I've continued to grow and evolve
                  as a developer, taking on new challenges and learning the
                   latest technologies along the way. Now, in my early
                    thirties, 7 years after starting my web development
                     journey.
              </Typography>
                

        </Box>

        
      </Box>

      <Box sx={{ backgroundColor:'black', color:'white',
      marginInline:{xs:2,md:15},display:{xs:'block',md:'flex'},
       marginBottom:'1%',paddingLeft:'3%'}} >
        
        
        <Box sx={{width:{xs:'100%',md:'45%'},display:'flex',marginTop:'%'}}>
           
           <img src={project3} style={UpImage} alt=' hello' />
           
          
        </Box>

        <Box sx={{marginLeft:{xs:0,md:6},justifyContent:'center',alignItems:'center',
        marginBlock:11,width:{xs:"85%",md:'50%'},marginTop:'0%'}}>
         <Typography sx={{fontSize:'2rem'}}> <strong>02</strong></Typography>
         <Typography sx={{fontSize:'2rem'}}> <strong>Crypto Screener</strong></Typography>
             <Typography sx={{marginTop:'2%'}}>
             I'm a passionate, self-proclaimed designer who specializes in
              full stack development (React.js & Node.js). I am very 
               enthusiastic about bringing the technical and visual aspects
                of digital products to life. User experience, pixel perfect
                 design, and writing clear, readable, highly performant 
                 code matters to me.I began my journey as a web developer 
                 in 2015, and since then,
                
                  I've continued to grow and evolve
                  as a developer, taking on new challenges and learning the
                   latest technologies along the way. Now, in my early
                    thirties, 7 years after starting my web development
                     journey.
              </Typography>
                

        </Box>

        
      </Box>

      <Box sx={{ backgroundColor:'black', color:'white',
      marginInline:{xs:2,md:15},display:{xs:'block',md:'flex'},
       marginBottom:'1%',paddingLeft:'3%'}} >
        
        
        <Box sx={{width:{xs:'100%',md:'45%'},display:'flex',marginTop:'%'}}>
           
           <img src={project3} style={UpImage} alt=' hello' />
           
          
        </Box>

        <Box sx={{marginLeft:{xs:0,md:6},justifyContent:'center',alignItems:'center',
        marginBlock:11,width:{xs:"85%",md:'50%'},marginTop:'0%'}}>
         <Typography sx={{fontSize:'2rem'}}> <strong>03</strong></Typography>
         <Typography sx={{fontSize:'2rem'}}> <strong>Crypto Screener</strong></Typography>
             <Typography sx={{marginTop:'2%'}}>
             I'm a passionate, self-proclaimed designer who specializes in
              full stack development (React.js & Node.js). I am very 
               enthusiastic about bringing the technical and visual aspects
                of digital products to life. User experience, pixel perfect
                 design, and writing clear, readable, highly performant 
                 code matters to me.I began my journey as a web developer 
                 in 2015, and since then,
                
                  I've continued to grow and evolve
                  as a developer, taking on new challenges and learning the
                   latest technologies along the way. Now, in my early
                    thirties, 7 years after starting my web development
                     journey.
              </Typography>
                

        </Box>

        
      </Box>
      </Box>
     
    </>
  )
}

export default Project