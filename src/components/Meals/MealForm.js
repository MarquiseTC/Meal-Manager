import { TextField,Button, Stack, Box,FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Container, ThemeProvider} from "@mui/material"
import { React, useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import { ThemeContext } from "styled-components"
import theme from "../../Theme"


export const MealForm = () => {
    const [meal, update] = useState({
        description:"",
        location:"",
        timeOfDay:"",
        carbCount:"",
        currentSugar:"",
        dateCreated:""
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
    currentSugar: meal.currentSugar,
    dateCreated: meal.dateCreated
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


    return (
        <>
        <ThemeProvider theme={theme}>
            <Container >
            <form autoComplete="off" onSubmit={handleSaveButtonClick} action={<Link to="/" />}>
                <h2>Meal Form</h2>
                <Stack spacing={2} direction="column" sx={{marginBottom: 1}} >
                <Box>
        <FormControl>
            <FormLabel id='meal-of-the-day-group'>
                Meal time
            </FormLabel >
            <RadioGroup name='meal-of-the-day-group' value={meal.timeOfDay}   aria-labelledby='meal-of-the-day-group'onChange={
                    (evt) => {
                        const copy = {...meal}
                        copy.timeOfDay = evt.target.value
                        update(copy)}}>
            <FormControlLabel control={<Radio/>} label='Breakfast' value='Breakfast'/>
            <FormControlLabel control={<Radio/>} label='Lunch' value='Lunch'/>
            <FormControlLabel control={<Radio/>} label='Dinner' value='Dinner'/>
            <FormControlLabel control={<Radio/>} label='Snack' value='Snack'
                        />
            </RadioGroup>
        </FormControl>
    </Box>      
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
               type="date" 
               variant="outlined" 
                color="secondary"        
                label=""        
                onChange={
                    (evt) => {
                        const copy = {...meal}
                        copy.dateCreated = evt.target.value
                        update(copy)}}
                        value={meal.dateCreated}        
                        fullWidth
                        required
                        sx={{mb: 4}}
                     />
                     <Button variant="outlined" color="secondary" type="submit">Save Meal</Button>
                    </Stack>   
                     </form>
                </Container>  
          </ThemeProvider>
           
        </>
   )
}