import React from "react";
import { Card, CardHeader, CardContent, IconButton, Typography, ListItem, List } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";

export default function MealCard({ meal, deleteMeal}){
    return (
        <div>
<Card elevation={5}>
    <CardHeader
    action={
        <IconButton onClick={() => deleteMeal(meal.id)} >
            
            < DeleteOutlined/>
          </IconButton>
    }
    title={meal.timeOfDay}
    
    

/>
<CardContent sx={{ bgcolor: '#58adb1'}}   >
    <List>
    <ListItem>Meal: {meal.description}</ListItem>
    <ListItem>Carb Count: {meal.carbCount}</ListItem>
    <ListItem>Current Sugar: {meal.currentSugar}</ListItem>
    <ListItem>Eaten at: {meal.location}</ListItem>
    
    </List>
</CardContent>
</Card>

        </div>
    )
}