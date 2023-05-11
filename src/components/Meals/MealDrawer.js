
import { Drawer,Box,Typography,IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react"; 
import MenuIcon from '@mui/icons-material/Menu';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import { MealList } from "./MealList";
import { useNavigate } from "react-router-dom";
import { styled, alpha} from "@mui/material/styles"
import InputBase from "@mui/material/Input";
import SearchIcon from'@mui/icons-material/Search';
import { MealSearch } from "./Search";




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


export const MealDrawer = () => {
  const localMealUser = localStorage.getItem("MM_user")
    const mealUserObject = JSON.parse(localMealUser) 
  const [ meals, setMeals] = useState("")
  const [results, setResults] = useState([])

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
  const navigate = useNavigate()
  const [ open, setOpen]=useState(false)
  return (
    <>
    <IconButton size='large' edge='start' color="inherit" aria-label="logo" onClick={()=> setOpen(true)}>
      <MenuIcon>

      </MenuIcon>
    </IconButton>
    <Drawer anchor="left" open={open} onClose={()=> setOpen(false)} setResults={setResults}>
<Box p={2} width='250' textAlign='center' role='presentation'>
 <Typography variant="h6" component='div'>
Meal Manager
 </Typography>
 <List>
 <ListItemButton onClick={() => navigate(`/info`)}>
  <ListItemIcon>
    <InfoIcon sx={{color: "primary.main"}} />
  </ListItemIcon>
  <ListItemText primary="Info"/>
 </ListItemButton>
 <ListItemButton onClick={() => navigate(`/graphs`)}>
  <ListItemIcon>
    <AnalyticsIcon sx={{color: "primary.main"}} />
  </ListItemIcon>
  <ListItemText primary="Graphs"/>
 </ListItemButton>
 <ListItemButton onClick={() => navigate(`/favorites`)}>
  <ListItemIcon>
    <FavoriteIcon sx={{color: "primary.main"}} />
  </ListItemIcon>
  <ListItemText primary="Favorites"/>
 </ListItemButton>
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
 </List>
 <MealSearch results={results}/>
</Box>
    </Drawer>
 </> )
}