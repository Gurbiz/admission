import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import './Sidebar.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import UploadButtons from './Uploaddoc';
import FullWidthGrid from './Page2';

const drawerWidth = 240;
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
      
        <Toolbar />
        <div className='space'>
        <h1>Application Form</h1>
        </div>
        <div className='space'>
        <h3>Terms And Conditions</h3>
        </div>
        <div className='space'>
        <div>
        <Checkbox {...label} defaultChecked />
        </div><div>
        <Typography paragraph>
          I understand and agree I should use the same email id throught the programme and during a term, for enrolling to a course and paying the fees.
          Assignment submitted using any other email id will not be taken into consideration towards final consolidated score & certification. The 
          responsibility of the mail id being valid until the course run is over is mine.
          </Typography>
          </div>
        </div>
        <div className='space'>
        <div>
        <Checkbox {...label} defaultChecked />
        </div><div>
        <Typography paragraph>
          I hearby declare that I have carefully read the instructions and all the particulars stated in this application form are true and correct 
          to the best of my knowledge and belief. If the information provided is found false/incorrect, I shall abide by any action and/ or decision taken 
          by MRSPTU, which may even be canclellation or withdrawl of the diploma/degree certificates awarded.
          </Typography>
          </div>
          </div>
        <div className='space'>
        <div>
        <Checkbox {...label} defaultChecked />
        </div><div>
        <Typography paragraph>
          I understand and agree that disciplinary action may be initiated against me if I induldge in any Acadmic Malpractices and/or Non-Academic 
          Malpractices while I am enrolled in the program.
          </Typography> 
          </div>
          </div>
          <div className='space'>
          <Stack direction="row" spacing={2}>
      <Button variant="contained" href="./Uploaddoc.jsx">
        Back
      </Button>
      <Button variant="contained" href="./Page2.jsx">
        Next
      </Button>
    </Stack>
          </div>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

