import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  styled,
  Paper,
  Item,
} from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PlaceIcon from "@mui/icons-material/Place";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

import MoneyIcon from '@mui/icons-material/Money';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PolylineIcon from '@mui/icons-material/Polyline';
import WebIcon from '@mui/icons-material/Web';
import FeedIcon from '@mui/icons-material/Feed';

import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import JavascriptIcon from '@mui/icons-material/Javascript';
import RecommendIcon from '@mui/icons-material/Recommend';
import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';


const MySkills = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
   
    <Box sx={{ marginLeft:{} , marginInline: "5%",marginBlock:'3%' }}>
      <Box sx={{  marginTop: "2%" }}>
        <Typography
          color="#202124"
          fontSize="20px"
          fontWeight="600"
          marginBottom="1%"
          textTransform="capitalize"
          letterSpacing="1.5px"
          textAlign={"center"}
          
        >
          My Skills
        </Typography>
    </Box>
    <container >
        <Grid container spacing={4} sx={{marginTop:'3%',justifyContent:'space-between'}}>
          <Grid item xs={12} sm={6} md={3} sx={{justifyContent:'space-between'}}>
            <Item >
              <Box sx={{ display:'flex',marginInline:'4%', justifyContent:'space-between'}}>
                <Box
                  sx={{
                    height: "70px",
                    width: "70px",
                    backgroundColor:'',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8%",
                    marginLeft:'30px',
                    border:'1px solid green'
                  }}
                >
                  <JavascriptIcon sx={{color:"green",height:'80px',width:'90px'}}/>
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black',marginTop:'20px', fontSize:'1.3rem'}} >
                            <strong >Javascript</strong>
                        </Typography>
                        

                        
                </Box>
              </Box>
            </Item>
          </Grid>



          <Grid item xs={12} sm={6} md={3} >
            <Item >
            <Box sx={{ display:'flex',marginInline:'4%', justifyContent:'space-between'}}>
                <Box
                  sx={{
                    height: "70px",
                    width: "70px",
                    backgroundColor:'',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8%",
                    marginLeft:'30px',
                    border:'1px solid green'
                  }}
                >
                  <RecommendIcon sx={{color:"green",height:'80px',width:'90px'}}/>
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black',marginTop:'20px', fontSize:'1.3rem'}} >
                            <strong >React</strong>
                        </Typography>
                        

                        
                </Box>
              </Box>
            </Item>
          </Grid>



          <Grid item xs={12} sm={6} md={3} >
            <Item >
            <Box sx={{ display:'flex',marginInline:'4%', justifyContent:'space-between'}}>
                <Box
                  sx={{
                    height: "70px",
                    width: "70px",
                    backgroundColor:'',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8%",
                    marginLeft:'30px',
                    border:'1px solid green'
                  }}
                >
                  <CssIcon sx={{color:"green",height:'80px',width:'90px'}}/>
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black',marginTop:'20px', fontSize:'1.3rem'}} >
                            <strong >CSS</strong>
                        </Typography>
                        

                        
                </Box>
              </Box>
            </Item>
          </Grid>



          <Grid item xs={12} sm={6} md={3} >
            <Item >
            <Box sx={{ display:'flex',marginInline:'4%', justifyContent:'space-between'}}>
                <Box
                  sx={{
                    height: "70px",
                    width: "70px",
                    backgroundColor:'',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8%",
                    marginLeft:'30px',
                    border:'1px solid green'
                  }}
                >
                  <HtmlIcon  sx={{color:"green",height:'50px',width:'60px'}}/>
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black',marginTop:'20px', fontSize:'1.3rem'}} >
                            <strong >HTML</strong>
                        </Typography>
                        

                        
                </Box>
              </Box>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={3} >
            <Item >
            <Box sx={{ display:'flex',marginInline:'4%', justifyContent:'space-between'}}>
                <Box
                  sx={{
                    height: "70px",
                    width: "70px",
                    backgroundColor:'',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8%",
                    marginLeft:'30px',
                    border:'1px solid green'
                  }}
                >
                  <JavascriptIcon sx={{color:"green",height:'80px',width:'90px'}}/>
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black',marginTop:'20px', fontSize:'1.3rem'}} >
                            <strong >Javascript</strong>
                        </Typography>
                        

                        
                </Box>
              </Box>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={3} >
            <Item >
            <Box sx={{ display:'flex',marginInline:'4%', justifyContent:'space-between'}}>
                <Box
                  sx={{
                    height: "70px",
                    width: "70px",
                    backgroundColor:'',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8%",
                    marginLeft:'30px',
                    border:'1px solid green'
                  }}
                >
                  <JavascriptIcon sx={{color:"green",height:'80px',width:'90px'}}/>
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black',marginTop:'20px', fontSize:'1.3rem'}} >
                            <strong >Javascript</strong>
                        </Typography>
                        

                        
                </Box>
              </Box>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={3} >
            <Item >
            <Box sx={{ display:'flex',marginInline:'4%', justifyContent:'space-between'}}>
                <Box
                  sx={{
                    height: "70px",
                    width: "70px",
                    backgroundColor:'',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8%",
                    marginLeft:'30px',
                    border:'1px solid green'
                  }}
                >
                  <JavascriptIcon sx={{color:"green",height:'80px',width:'90px'}}/>
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black',marginTop:'20px', fontSize:'1.3rem'}} >
                            <strong >Javascript</strong>
                        </Typography>
                        

                        
                </Box>
              </Box>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={3} >
            <Item >
            <Box sx={{ display:'flex',marginInline:'4%', justifyContent:'space-between'}}>
                <Box
                  sx={{
                    height: "70px",
                    width: "70px",
                    backgroundColor:'',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8%",
                    marginLeft:'30px',
                    border:'1px solid green'
                  }}
                >
                  <JavascriptIcon sx={{color:"green",height:'80px',width:'90px'}}/>
                </Box>
                
                <Box sx={{textAlign:'left',marginInline:{xs:'5px',md:"20px"}}}>
                        <Typography sx={{color:'black',marginTop:'20px', fontSize:'1.3rem'}} >
                            <strong >Javascript</strong>
                        </Typography>
                        

                        
                </Box>
              </Box>
            </Item>
          </Grid>

          

          
        </Grid>



        </container> 
      </Box>
      
 
  );
};

export default MySkills;
