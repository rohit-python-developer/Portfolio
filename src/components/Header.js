import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ResumeUpload from './ResumeUpload';

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = ['Home', 'About', 'Contact' ,<ResumeUpload/>];

  return (
    <div>
      <AppBar position="static" sx={{backgroundColor:'white',color:'black' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
           Portfolio
          </Typography>

          {/* Display buttons on big screen */}

          
          <div sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {menuItems.map((text) => (
              <Button key={text} color="inherit" sx={{ display: { xs: 'none',sm:'initial' } }} >
                <p >{text}</p>
              </Button>
            ))}
          </div>

          {/* Menu icon on small screen */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'flex', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screen */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List >
          {menuItems.map((text) => (
            <ListItem button key={text} onClick={toggleDrawer(false)} sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',alignItems:'center'}}>
              <Button color="inherit" >{text}</Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Header;