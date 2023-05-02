import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Grid, Button } from "@mui/material"
import MealCard from "./MealCard"



export const MealList = () => {
    const [meals, setMeals] = useState([])
    const navigate = useNavigate()


useEffect(() => {
        fetch(`http://localhost:8088/meals?_expand=user`)
        .then(response => response.json())
        .then((meals) => {
            setMeals(meals)
        })
    },[]
)
 const deleteMeal = (id) => {
        fetch(`http://localhost:8088/meals/${id}`, {
             method: "DELETE"
         })

    const newMeal = meals.filter(meal => meal.id !== id)
         setMeals(newMeal)
        }


return (
        <Container>
            <h2>Meal List</h2>
            <Button variant="outlined" color="secondary" type="submit" onClick={() => navigate("/create")}>Create Meal</Button>
            <Grid container spacing={3}>
            {meals.map(meal => (
               <Grid item key={meal.id} xs={12} md={6} lg={4}>
                <MealCard meal={meal} deleteMeal={deleteMeal}/>
                </Grid>
            ))}
            </Grid>
       </Container> 
)
 }

