import { Outlet, Route, Routes } from "react-router-dom"
import Calendar from "../Meals/Calendar"

import React from "react"
import { BarGraph, PieGraph } from "../Meals/Charts"
import { ThemeProvider } from "@mui/material"
import { themeOptions } from "../../MealManager"
import Theme from "../../Theme"









export const ApplicationViews = () => {
	return (
	<ThemeProvider theme={Theme}>
		<Routes>
			<Route path="*" element={
			<>	
			<h2>Welcome to your Meal Manager</h2>
			<Calendar/>
			
			
		
				<Outlet />
		</>	}>
	
		</Route>
		</Routes>
	</ThemeProvider>
	)
	 

	
}

