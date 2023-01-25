import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from '@mui/material/Link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { width } from '@mui/system';
import { useParams } from 'react-router-dom';




export default function TemporaryDrawer() {
  const [state, setState] = React.useState({

     left: false,
  });

const location=useParams()
console.log(location);
localStorage.setItem('userId',location.id)
const userId=localStorage.getItem('userId')
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
<br>
</br>
<br>
</br>
 <AccountCircleIcon sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250  ||{ width: 500}  }}
      role="presentation"
      
 
 />
      <List className='listDrawer'>
      <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <Link href= {`/ProfilUser/${userId}`}>
                <ListItemText primary="Votre Profil" />
              </Link>
            </ListItemButton>
          </ListItem>

        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <Link href= {`/congé/${userId}`}>
                <ListItemText primary="Demande de congé" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <Link href= "/sortie">
                <ListItemText primary="Autorisation de sortie" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <Link href= {`/demandes/${userId}`}>
                <ListItemText primary="Mes demandes RH" />
              </Link>
              
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <Link href= {`/UpdateUser/${userId}`}>
                <ListItemText primary="Modifier votre profil" />
              </Link>
            
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <Link href= {`/mesDemandes/`}>
                <ListItemText primary="demandesItem " />
              </Link>
            
            </ListItemButton>
          </ListItem>

        {/* {['Profile', 'Demande de congé ', 'Autorisation de sortie ', 'Mes demandes RH'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <Link href= {text}>
                <ListItemText primary={text} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      {['left' ].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}