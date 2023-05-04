import { Outlet, Route, Routes } from "react-router-dom"
import { MealForm } from "../Meals/MealForm"
import { MealList } from "../Meals/MealList"


export const ApplicationViews = () => {
	return (
	
		<Routes>
			<Route path="/" element={
				
			<>	
			<h2>Welcome to your Meal Manager</h2>
			<MealList/>
				<Outlet />
		</>	}>
		<Route path="/create" element={ <MealForm /> } />
		<Route path="/meals" element={ <MealList /> } />
		</Route>
		</Routes>
		
	)
	 

	
}

