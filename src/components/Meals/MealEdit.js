import {React,  useEffect, useState, } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { TextField,Button, Stack, Box,FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Container, Checkbox, ThemeProvider} from "@mui/material"
import { getMealEdit, saveMealEdit } from "../../MMAPIManager"
import Theme from "../../Theme"


export const EditMeal = () => {
    const [meal, mealEdit] = useState({
        description:"",
        location:"",
        timeOfDay:"",
        carbCount:"",
        currentSugar:"",
        dateCreated:"",
        favorite: false
    })

    const { mealId}=useParams()
    const navigate = useNavigate()

    useEffect(() => {
       getMealEdit(mealId)
        .then((data) => {
            mealEdit(data)
        })
    },[mealId])


    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        console.log('work please')
       

  saveMealEdit(meal)
    .then(() => {
        navigate("/meals")
    })
    }

    return (
        <>
        <ThemeProvider theme={Theme}>
            <Container >
            <form autoComplete="off"  action={<Link to="/" />}>
                <h2>Meal Form</h2>
                <Stack spacing={2} direction="column" sx={{marginBottom: 1}} >
                <Box>
        <FormControl>
            <FormLabel id='meal-of-the-day-group'>
                Edit Meal
            </FormLabel >
            <RadioGroup name='meal-of-the-day-group' value={meal.timeOfDay}   aria-labelledby='meal-of-the-day-group'
            onChange={
                    (evt) => {
                        const copy = {...meal}
                        copy.timeOfDay = evt.target.value
                        mealEdit(copy)}}>
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
                        mealEdit(copy)}}
                        value={meal.description}        
                        fullWidth
                        
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
                        mealEdit(copy)}}
                        value={meal.carbCount}        
                        fullWidth
                        
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
                        mealEdit(copy)}}
                        value={meal.currentSugar}        
                        fullWidth
                        
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
                        mealEdit(copy)}}
                        value={meal.location}        
                        fullWidth
                        
                        sx={{mb: 4}}
                     />
                     <Box>
                <Box>
                    <FormControlLabel label='Favorite' 
                    control={<Checkbox/>}
                    onChange={
                        (evt) => {
                            const copy = {...meal}
                            copy.favorite = evt.target.checked
                            mealEdit(copy)}}
                            value={meal.favorite}        
                            fullWidth
                            
                            sx={{mb: 4}}
                    />
                    </Box>
            </Box>
                     <Button variant="outlined" color="secondary" type="submit" onClick={handleSaveButtonClick}>Edit Meal</Button>
                    </Stack>   
                     </form>
                </Container>  
          </ThemeProvider>
           
        </>
   )
}