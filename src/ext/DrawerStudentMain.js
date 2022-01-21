  import * as React from 'react';
  import Box from '@mui/material/Box';
  import CssBaseline from '@mui/material/CssBaseline';
  import Drawer from '@mui/material/Drawer';
  import List from '@mui/material/List';
  import ListItem from '@mui/material/ListItem';
  import { Dashboard } from '@mui/icons-material';
  import { styled } from '@mui/styles';
  import SettingsIcon from '@mui/icons-material/Settings';
  import LogoutIcon from '@mui/icons-material/Logout';
  import CreateIcon from '@mui/icons-material/Create';
  import PendingActionsIcon from '@mui/icons-material/PendingActions';
  import SchoolIcon from '@mui/icons-material/School';
  import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
  import MenuBookIcon from '@mui/icons-material/MenuBook';
  import HomeMaxIcon from '@mui/icons-material/HomeMax';
  import { Divider, ListItemButton, ListSubheader, Slider,Link } from '@mui/material';
  import { useState } from "react";


  import './scroll.css'
import { NavLink } from 'react-router-dom';
  const drawerWidth = 250;

  const ListItemText = styled(Box)({
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '0px',
  })


  function ImageBlock(){
    return(
      <div style={{width: "100%"}}>
        <Box sx={{width: "100%", height: "72px", display:"flex" }}>
          <Box>
          <img style={{width: "72px", height: "72px"}} src='https://puchd.ac.in/asset/pu-logo.png'/>
          </Box>
          <Box sx={{padding: "15px 0 0 15px",fontFamily: 'Roboto',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '0px',
    textAlign: 'left', }}>
            MRSPT University Bathinda
          </Box>
        </Box>
      </div>
    )
  }



  function StudentSideBar({isOpen}) {
    const main={
      "Dashboard":{
        "select":"dash",
        'href':"/dash",
        'icon':()=> <HomeMaxIcon sx={{mr:3}}/>
      },
      "Latest Updates":{
        "select":"lp",
        'href':"/latestupdate",
        'icon':()=> <DynamicFeedIcon sx={{mr:3}}/>
      },
      "Current Program":{
        "select":"cp",
        'href':"/currentprogram",
        'icon':()=> <SchoolIcon sx={{mr:3}}/>
      },
      "Pending Subjects":{
        "select":"ps",
        'href':"/pendingsubjects",
        'icon':()=> <PendingActionsIcon sx={{mr:3}}/>
      },
      "My OpenCase":{
        "select":"mp",
        'href':"/myopencase",
        'icon':()=> <MenuBookIcon sx={{mr:3}}/>
      },
      "Syngery":{
        "select":"sg",
        'href':"/syngery",
        'icon':()=> <Dashboard sx={{mr:3}}/>
      },
      "Create":{
        "select":"cr",
        'href':"/create",
        'icon':()=> <CreateIcon sx={{mr:3}}/>
      },
      "Settings":{
        "select":"se",
        'href':"/settings",
        'icon':()=>  <SettingsIcon sx={{mr:3}}/>
      },
      "Sign Out":{
        "select":"so",
        'href':"/logout",
        'icon':()=>  <LogoutIcon sx={{mr:3}}/>
      },
    }
    const [select, setSelect] = useState()
    const  Button = styled(NavLink)({
        textDecoration:'none',
        variant:"button",
        display:'flex',
        width:drawerWidth,
        color:"#183B56",
        height:'48px',
        padding:"14px",
        borderRadius:'20px',
        border: 'none',
        // '&.Mui-selected': {
        //   backgroundColor: "#4774E7",
        //   color: "#3B5AFB",
        //   borderRadius: "12px"
        // }
      })
    const drawer = (
      <div className='overflowHide'>
          <Box>
        <List>
          <ListItem>
            <ImageBlock/>
            </ListItem>
            <Divider />
            <ListSubheader>
                MAIN MENU
            </ListSubheader>
            {
              Object.keys(main).map(i=>{
                return (
                  <>
                  <Button to={main[i].href} 
                  >
                  {console.log(main[i].select)}
                  {main[i].icon()}
                <ListItemText>{i}</ListItemText>
                </Button>
                </>
                )
              })
            }   
          </List>
          </Box>
          
      </div>
    );


    return (
      <Box sx={{ display: 'flex'}}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: isOpen ? drawerWidth: 0 }, flexShrink: { sm: 0 } }}>
          <Drawer
            variant="persistent"
            open={isOpen}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              // display: { xs: 'block', sm: 'block' },
              position: 'relative',
              '& .MuiDrawer-paper': { background: "#FFFFFF",boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        </Box>
    );
  }



  export default StudentSideBar;
