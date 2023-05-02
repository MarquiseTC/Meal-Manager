import React from "react";
import { Card, CardHeader, CardContent, IconButton, Typography } from "@mui/material";
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
    subheader={meal.carbCount}

/>
<CardContent>
    <Typography variant="body10" color="textSecondary">
        {meal.description}
    </Typography>
</CardContent>
</Card>

        </div>
    )
}