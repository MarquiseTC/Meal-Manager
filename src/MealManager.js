import { Route, Routes } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import React from "react"
import { ApplicationViews } from "./components/views/ApplicationViews"
import { Authorized } from "./components/views/Authorized"
import { MealForm } from "./components/Meals/MealForm"
import { MealList } from "./components/Meals/MealList"
import { ButtonAppBar } from "./components/nav/AppBar"







export const MealManager = () => {
	return (
		
			<Routes>	
		<Route path="/login" element={<Login /> } />
		<Route path="/register" element={<Register />} />
		<Route path="/create" element={<MealForm />} />
		<Route path="/meals" element={<MealList />} />
		<Route path="*" element={
			
			<Authorized>
				<>
					<ButtonAppBar/>
					<ApplicationViews />
				</>
			</Authorized>
			
		}/>
		
		</Routes>	
	
	
);
}

