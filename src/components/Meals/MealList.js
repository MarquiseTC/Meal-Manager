import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Grid, Button } from "@mui/material"
import MealCard from "./MealCard"
import { MealSearch } from "./Search"
import {styled, alpha} from "@mui/material/styles"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"




export const MealList = () => {
    const [meals, setMeals] = useState([])
    const [filteredMeals, setFiltered] = useState([])
     const navigate = useNavigate()
     const localMealUser = localStorage.getItem("MM_user")
     const mealUserObject = JSON.parse(localMealUser) 
     
          


//   useEffect (
//     () => {
//         const searchedMeals = meals.filter(meal => {
//             return meal.description.toLowerCase().startsWith(searchTermState.toLowerCase())
//         })
//         setFiltered(searchedMeals)
//     },
// [searchTermState]
        
// )  
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
        <Container>
            <h2>Meal List</h2>
            <Button variant="outlined" color="secondary" type="submit" onClick={() => navigate("/meals/create")}>Create Meal</Button>
            <Grid container spacing={3}>
            {filteredMeals.map((meal) => (
               <Grid item key={meal.userId} xs={12} md={6} lg={4}>
                
                <MealCard meal={meal} deleteMeal={deleteMeal} 
                />
               </Grid>
            ))}
            
            </Grid>
            
       </Container> 
)
 }

