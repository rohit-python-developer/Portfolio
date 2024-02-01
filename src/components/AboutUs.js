// import React from 'react'
// import about from "../assets/img/About.png"
// import { Typography,Box } from '@mui/material'

// const AboutUs = () => {
//     const UpImage={
        
//         height:'65%',
//         width:{xs:'100%',md:'55%'}
//         // marginLeft:{xs:"0%",md:'10%'}
//     }
//   return (
//     <>
//         <Box sx={{marginInline:{xs:'6%',md:"12%"},height:'450px',display:{xs:'block',md:'flex'}}}>
//             <Box sx={{width:{xs:'100%',md:'35%'}}}>
//             <img src={about} style={UpImage} alt=' hello' />
//             </Box>
//             <Box sx={{width:{xs:'100%',md:'55%'}}}>
//              <Typography sx={{fontSize:'2rem'}}>About <strong>Me</strong></Typography>
//              <Typography sx={{marginTop:'2%'}}>
//              I'm a passionate, self-proclaimed designer who specializes in
//               full stack development (React.js & Node.js). I am very 
//               enthusiastic about bringing the technical and visual aspects
//                of digital products to life. User experience, pixel perfect
//                 design, and writing clear, readable, highly performant 
//                 code matters to me.I began my journey as a web developer 
//                 in 2015, and since then,
                
//                  I've continued to grow and evolve
//                  as a developer, taking on new challenges and learning the
//                   latest technologies along the way. Now, in my early
//                    thirties, 7 years after starting my web development
//                     journey, I'm building cutting-edge web applications 
//                     using modern technologies such as Next.js, TypeScript,
//                      Nestjs, Tailwindcss, Supabase and much more.
//              </Typography>
                
//             </Box>
//         </Box>
//     </>
//   )
// }

// export default AboutUs

import { Box,Typography } from '@mui/material'
import React from 'react'
import rohit from "../assets/img/rohit.jpeg"
import about from "../assets/img/About.png"

const AboutUs = () => {
    const UpImage={
        width:'100%',
        height:'60%',
        marginLeft:{xs:"0%",md:'10%'}
    }
  return (
    <>
      <Box sx={{marginInline:{xs:2,md:15},display:{xs:'block',md:'flex'},marginTop:3, marginBottom:'1%'}} >
        
        
        <Box sx={{width:{xs:'100%',md:'45%'},display:'flex',marginTop:'6%'}}>
           
           <img src={about} style={UpImage} alt=' hello' />
           
          
        </Box>

        <Box sx={{backgroundColor:'white',marginLeft:{xs:0,md:6},justifyContent:'center',alignItems:'center',
        marginBlock:11,width:{xs:"85%",md:'50%'}}}>
         <Typography sx={{fontSize:'2rem'}}>About <strong>Me</strong></Typography>
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
                     journey, I'm building cutting-edge web applications 
                     using modern technologies such as Next.js, TypeScript,
                      Nestjs, Tailwindcss, Supabase and much more.
              </Typography>
                

        </Box>
      </Box>
     
    </>
  )
}

export default AboutUs
