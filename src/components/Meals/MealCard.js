import React from "react";
import { Card, CardHeader, CardContent, IconButton, Typography, ListItem, List, ButtonGroup, ThemeProvider } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import EditIcon from '@mui/icons-material/Edit'
import { useNavigate } from "react-router-dom";
import theme from "../../Theme";
import { blue, grey, red } from "@mui/material/colors";


export default function MealCard({ meal, deleteMeal }) {
const navigate = useNavigate()
    return (
        <div>
            

            
            <Card elevation={10} sx={{bgcolor:grey[200]}}>
                <CardHeader sx={{bgcolor: blue[100]}}
                    action={
                        <ButtonGroup>
                            <IconButton onClick={() => deleteMeal(meal.id)}><DeleteOutlined /> </IconButton>
                            <IconButton onClick={() => navigate(`/meals/${meal.id}/edit`)}><EditIcon /> </IconButton>

                        </ButtonGroup>
                   }title={meal.timeOfDay} 
                    



                />
                <CardContent    >
                    <List>
                        <ListItem>Meal: {meal.description}</ListItem>
                        <ListItem>Carb Count: {meal.carbCount}</ListItem>
                        <ListItem>Current Sugar: {meal.currentSugar}</ListItem>
                        <ListItem>Eaten at: {meal.location}</ListItem>
                        <ListItem>Date: {meal.dateCreated}</ListItem>
                        <ListItem>Favorite:{meal.favorite}</ListItem>
                    </List>
    
                </CardContent>
            </Card>
     
        </div>
    )
}