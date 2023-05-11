import React from "react";
import { Card, CardHeader, CardContent, IconButton, Typography, ListItem, List, ButtonGroup, ThemeProvider } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import EditIcon from '@mui/icons-material/Edit'
import { useNavigate } from "react-router-dom";
import theme from "../../Theme";


export default function MealCard({ meal, deleteMeal }) {
const navigate = useNavigate()
    return (
        <div>
            <ThemeProvider theme={theme}>

            
            <Card elevation={20} >
                <CardHeader
                    action={
                        <ButtonGroup>
                            <IconButton onClick={() => deleteMeal(meal.id)}><DeleteOutlined /> </IconButton>
                            <IconButton onClick={() => navigate(`/meals/${meal.id}/edit`)}><EditIcon /> </IconButton>

                        </ButtonGroup>
                    }
                    title={meal.timeOfDay}



                />
                <CardContent    >
                    <List>
                        <ListItem>Meal: {meal.description}</ListItem>
                        <ListItem>Carb Count: {meal.carbCount}</ListItem>
                        <ListItem>Current Sugar: {meal.currentSugar}</ListItem>
                        <ListItem>Eaten at: {meal.location}</ListItem>
                    </List>
    
                </CardContent>
            </Card>
    </ThemeProvider>    
        </div>
    )
}