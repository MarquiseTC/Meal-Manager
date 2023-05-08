import { Outlet, Route, Routes } from "react-router-dom"
import Calendar from "../Meals/Calendar"

import React from "react"
import { BarGraph } from "../Meals/Charts"









export const ApplicationViews = () => {
	return (
	
		<Routes>
			<Route path="*" element={
			<>	
			<h2>Welcome to your Meal Manager</h2>
			<Calendar/>
			<BarGraph/>
			
			
		
				<Outlet />
		</>	}>
	
		</Route>
		</Routes>
		
	)
	 

	
}

