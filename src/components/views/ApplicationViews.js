import { Outlet, Route, Routes } from "react-router-dom"
import Calendar from "../Meals/Calendar"

import React from "react"
import { BarGraph, PieGraph } from "../Meals/Charts"
import { Card, CardMedia, Divider, ThemeProvider, Typography } from "@mui/material"
import { themeOptions } from "../../MealManager"

import MealCard from "../Meals/MealCard"
import { MealList } from "../Meals/MealList"
import Theme from "../../Theme"









export const ApplicationViews = () => {
	return (
	<div style={{
		margin: "auto"
	}}>
		<Routes>
			<Route path="*" element={
			<>	
			
			
			<Card>
			<CardMedia
                    component='img'
                    height='200'
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_2AebbTPkukpUEn3YFLxUIU7AaspWKuGUGstq4BuxIYLBoYa6xXN_cJQXOvW4Ca_egI&usqp=CAU"></CardMedia>
			<Typography variant="h2" component='div' >
				Thank you for choosing meal manager. 
				</Typography>
				<Divider></Divider>
				<Typography variant="h6">Meal Manager is specifically designed for those with Diabetes to help keep track of their meals. My daughter has type 1 Diabetes and it's been challenging to always rememeber what she eats. I designed this app to help make sure that we give her a good variety of foods, to make life a little easier, and hopefully add more fun for her. May this app be as helpul to you was it was to me!</Typography>
				</Card>
		</>	}>
	
		</Route>
		</Routes>
	</div>
	)
	 

	
}

