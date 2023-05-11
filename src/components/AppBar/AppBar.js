import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { useNavigate} from 'react-router-dom';
import SearchIcon from'@mui/icons-material/Search';
import{styled, alpha} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import PersistentDrawerLeft from '../Meals/MealDrawer';
import { MealDrawer } from '../Meals/MealDrawer';
import { format } from 'date-fns';
import { MealAvatar } from '../Meals/MealAvatar';
import { Avatar, Stack } from '@mui/material';





export default function ButtonAppBar () {
  const navigate = useNavigate()
  const localMealUser = localStorage.getItem("MM_user")
    const mealUserObject = JSON.parse(localMealUser) 

 
  return (
      <AppBar  sx={{ minHeight: ".1rem"}}  position="fixed" >
        <Toolbar>
            <MealDrawer/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" type="submit" onClick={() => navigate("/")}>Meal Manager</Button> 
          Today is { format(new Date(), 'MMMM do Y')}
          </Typography>
          <Button color="inherit" type="submit" onClick={() => navigate("/meals/create")}>Food Form</Button>
          <Button color="inherit" type="submit" onClick={() => navigate("/meals")}>Meal List</Button>
          <Button color="inherit" type="submit" onClick={() =>{localStorage.removeItem("MM_user"); navigate("/", {replace:true})}}>Logout</Button>
           <MealAvatar/>               
        </Toolbar>
      </AppBar>
  );
}

