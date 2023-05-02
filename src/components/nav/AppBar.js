import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate} from 'react-router-dom';

export const ButtonAppBar =() => {
  const navigate =useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="secondary" type="submit" onClick={() => navigate("/")}>Home</Button>
          <Button color="secondary" type="submit" onClick={() => navigate("/login")}>Login</Button>
          </Typography>
          <Button color="secondary" type="submit" onClick={() => navigate("/meals")}>Meal List</Button>
          <Button color="secondary" type="submit" onClick={() =>{localStorage.removeItem("MM_user"); navigate("/login", {replace:true})}}>Logout</Button>
                            
        </Toolbar>
      </AppBar>
    </Box>
  );
}

