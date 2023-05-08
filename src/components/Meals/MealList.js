import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Grid, Button } from "@mui/material"
import MealCard from "./MealCard"
import { BarGraph } from "./Charts"



export const MealList = () => {
    const [meals, setMeals] = useState([])
    const [filteredMeals, setFiltered] = useState([])
     const navigate = useNavigate()
     const localMealUser = localStorage.getItem("MM_user")
     const mealUserObject = JSON.parse(localMealUser) 

useEffect(
    () => {
        fetch(`http://localhost:8088/meals`)
        .then(response => response.json())
        .then((mealArray) => {
            setMeals(mealArray)
        }
        )
    }, []
)
    // useEffect(
    //     () => {
    //         const searchedMeals = meals.filter(meal => {
    //             return meal.timeOfDay.toLowerCase().startsWith(searchTermState.toLowerCase())
    //         })
    //         setFiltered(searchedMeals)
    //     },
    //     [searchTermState]
    // )
        



useEffect(() => {
     const myMeals = meals.filter(meal => meal.userId === mealUserObject.id)
     setFiltered(myMeals)
    },[meals]
)






 const deleteMeal = (mealUserObject) => {
        fetch(`http://localhost:8088/meals/${mealUserObject}`, {
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

        //  const newMeal = meals.filter(meal => meal.id !== id)
        //  setMeals(newMeal)
        // }
        }

return (
        <Container>
            <h2>Meal List</h2>
            <Button variant="outlined" color="secondary" type="submit" onClick={() => navigate("/create")}>Create Meal</Button>
            <Grid container spacing={3}>
            {filteredMeals.map(meal => (
               <Grid item key={meal.Id} xs={12} md={6} lg={4}>
                <MealCard meal={meal} deleteMeal={deleteMeal}/>
               </Grid>
            ))}
            
            </Grid>
       </Container> 
)
 }

