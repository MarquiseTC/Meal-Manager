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
import PersistentDrawerLeft from '../Meals/MealContainer';
import { MealDrawer } from '../Meals/MealContainer';
import { format } from 'date-fns';
import { MealAvatar } from '../Meals/MealAvatar';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function ButtonAppBar ({setResults}) {
  const navigate = useNavigate()
  const localMealUser = localStorage.getItem("MM_user")
    const mealUserObject = JSON.parse(localMealUser) 
  const [ meals, setMeals] = useState("")
  const fetchMeals = (value) => {
    fetch(`http://localhost:8088/meals`)
    .then((response) => response.json())
    .then((json) => {
      const results = json.filter((meals) => {
        return  value &&
        meals && 
        meals.userId ===
        mealUserObject.id &&
        meals.description.toLowerCase().includes(value)
      });
      
     setResults(results)
     console.log(results)
    }); 
  };
  const handleChange = (value) => {
      setMeals(value);
      fetchMeals(value);
  }
  return (
      <AppBar position="static" sx={{ bgcolor: '#5D2B75'}} >
        <Toolbar>
            <MealDrawer/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" type="submit" onClick={() => navigate("/")}>Meal Manager</Button> 
          Today is { format(new Date(), 'MMMM do Y')}
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Meals..."
              inputProps={{ 'aria-label': 'search' }}
              value={meals}
              onChange={(e) => handleChange(e.target.value)}
            />
          </Search>  
          
          
          <Button color="inherit" type="submit" onClick={() => navigate("/create")}>Food Form</Button>
          <Button color="inherit" type="submit" onClick={() => navigate("/meals")}>Meal List</Button>
          <Button color="inherit" type="submit" onClick={() =>{localStorage.removeItem("MM_user"); navigate("/", {replace:true})}}><MealAvatar/></Button>
                          
        </Toolbar>
      </AppBar>
  );
}

