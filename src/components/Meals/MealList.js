import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Grid, Button } from "@mui/material"
import MealCard from "./MealCard"
import { MealSearch } from "./Search"
import {styled, alpha, ThemeProvider} from "@mui/material/styles"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"
import Theme from "../../Theme"




export const MealList = () => {
    const [meals, setMeals] = useState([])
    const [filteredMeals, setFiltered] = useState([])
    const [favorite, setFavorite] =useState(false)
     const navigate = useNavigate()
     const localMealUser = localStorage.getItem("MM_user")
     const mealUserObject = JSON.parse(localMealUser) 
     console.log(favorite)
     
     useEffect
     ( () => {
         if (favorite) {
             const favoriteMeals = meals.filter(meal => meal.favorite === true)
         setFiltered(favoriteMeals)
         
         }
         else {
             setFiltered(meals)
         }
     },
     [favorite]
     
     )
    



useEffect(
    () => {
        fetch(`http://localhost:8088/meals?_expand=user`)
        .then(response => response.json())
        .then((mealArray) => {
            setMeals(mealArray)
        }
        )
    }, []
)

useEffect(() => {
    
     const myMeals = meals.filter(meal => meal.userId === mealUserObject.id)
     setFiltered(myMeals)
    },[meals]

)







 const deleteMeal = (mealId) => {
        fetch(`http://localhost:8088/meals/${mealId}`, {
             method: "DELETE"
         })
         .then(()=> 
         { fetch(`http://localhost:8088/meals`)
         .then(response => response.json())
         .then((mealArray) => {
            setMeals(mealArray)
         }
)
         })
        }


return (
    <ThemeProvider theme={Theme}>
        <Container>
            <h2>Meal List</h2>
            <Button variant="outlined" color="secondary" type="submit" onClick={() => navigate("/meals/create")}>Create Meal</Button>
            {/* <Button variant="outlined" color="secondary" type="submit" onClick={()=> { setFavorite(true)}}>Favorite</Button>
            <Button variant="outlined" color="secondary" type="submit" onClick={() => { setFavorite(false)}}>All Meals</Button> */}
            <Grid container spacing={3}>
            {filteredMeals.map((meal) => (
               <Grid item key={meal.userId} xs={12} md={6} lg={4}>
                
                <MealCard meal={meal} deleteMeal={deleteMeal} 
                />
               </Grid>
            ))}
            
            </Grid>
            
       </Container> </ThemeProvider>
)
 }

