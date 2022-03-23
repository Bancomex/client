import * as React from 'react'
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';

export function MenuDrawer(props){
  
  const [state, setState] = React.useState(false);
  
  const toggleDrawer = (isopen)=>(event) => {
      setState(isopen);      
    };

   const list = () => (  
     <Box
       role="presentation"
      //  onClick={toggleDrawer(false)}
      onClick ={toggleDrawer(false)}
       onKeyDown={toggleDrawer(false)}
     >
       <List>
        <ListItem><h2> Menu Cajero</h2></ListItem> 
         {['Depositar a cuenta', 'Retirar Efectivo', 'Reposición de Cuenta', 'Dinero disponible'].map((text, index) => (
           <ListItem button key={index}>
             <ListItemIcon>
               {
                index === 0 ? <SavingsOutlinedIcon /> : 
                index === 1 ? <AttachMoneyOutlinedIcon/> : 
                index === 2 ? <ErrorOutlineOutlinedIcon/> : 
                              <LocalAtmOutlinedIcon/> 
                } 
             </ListItemIcon>
             <ListItemText onClick={()=>props.menudisp(text)}  primary={text} />
           </ListItem>
         ))}
       </List>
       <Divider />
       <List>
         {['Inbox', 'Correo', 'Spam'].map((text, index) => (
           <ListItem button key={text}>
             <ListItemIcon>
               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
             </ListItemIcon>
             <ListItemText primary={text} />
           </ListItem>
         ))}
       </List>
     </Box>
   );

    return(
        <>
        <IconButton onClick={toggleDrawer(true)} color="primary" aria-label="upload picture" component="span">
        
            <MenuIcon />
        </IconButton>
        <Drawer
            transitionDuration={{enter: 350, exit:450} }
            anchor='left'
            open={state}
            onClose={toggleDrawer(false)}
          >
            {list()}
        </Drawer>
        
        </>
    );

}