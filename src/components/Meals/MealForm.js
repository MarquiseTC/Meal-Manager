// This file wil display the form that users will use when they wish to fill out new events.
import { TextField,Button, Stack } from "@mui/material"
import { useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import React from "react"

export const MealForm = () => {
    const [meal, update] = useState({
        description:"",
        location:"",
        timeOfDay:"",
        carbCount:"",
        currentSugar:""
 })
const navigate = useNavigate()
    const localMealUser = localStorage.getItem("MM_user")
    const mealUserObject = JSON.parse(localMealUser) 

    const handleSaveButtonClick = (evt) => {
        evt.preventDefault()
        console.log("You clicked the  button.")

        const sendMealToAPI = {
    userId: mealUserObject.id,
    description: meal.description,
    location: meal.location,
    timeOfDay: meal.timeOfDay,
    carbCount: meal.carbCount,
    currentSugar: meal.currentSugar
}
        return fetch(`http://localhost:8088/meals`,
        {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendMealToAPI)
        })
        .then(response => response.json())
        .then(() => {
            navigate("/meals")
        })
    }

// Event form is in react bootstrap formatting
    return (
        <React.Fragment>
            <form autoComplete="off" onSubmit={handleSaveButtonClick} action={<Link to="/" />}>
                <h2>Meal Form</h2>
                <Stack spacing={2} direction="column" sx={{marginBottom: 4}}>
                <TextField
               type="text" 
               variant="outlined" 
                color="secondary"        
                label="What are you eating?"        
                onChange={
                    (evt) => {
                        const copy = {...meal}
                        copy.description = evt.target.value
                        update(copy)}}
                        value={meal.description}        
                        fullWidth
                        required
                     />
                  </Stack>   
                   <TextField
               type="text" 
               variant="outlined" 
                color="secondary"        
                label="Where are you eating?"        
                onChange={
                    (evt) => {
                        const copy = {...meal}
                        copy.location = evt.target.value
                        update(copy)}}
                        value={meal.location}        
                        fullWidth
                        required
                        sx={{mb: 4}}
                     />
                     <TextField
               type="text" 
               variant="outlined" 
                color="secondary"        
                label="What's the occasion?"        
                onChange={
                    (evt) => {
                        const copy = {...meal}
                        copy.timeOfDay = evt.target.value
                        update(copy)}}
                        value={meal.timeOfDay}        
                        fullWidth
                        required
                        sx={{mb: 4}}
                     />
                     <TextField
               type="number" 
               variant="outlined" 
                color="secondary"        
                label="Carb Count?"        
                onChange={
                    (evt) => {
                        const copy = {...meal}
                        copy.carbCount = evt.target.value
                        update(copy)}}
                        value={meal.carbCount}        
                        fullWidth
                        required
                        sx={{mb: 4}}
                     />
                     <TextField
               type="number" 
               variant="outlined" 
                color="secondary"        
                label="Current Sugar?"        
                onChange={
                    (evt) => {
                        const copy = {...meal}
                        copy.currentSugar = evt.target.value
                        update(copy)}}
                        value={meal.currentSugar}        
                        fullWidth
                        required
                        sx={{mb: 4}}
                     />
                     <Button variant="outlined" color="secondary" type="submit">Save Meal</Button>
                     </form>
                  
          
           
        </React.Fragment>
   )
}