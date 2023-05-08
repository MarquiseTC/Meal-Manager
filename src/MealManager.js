import { Route, Routes } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import React,{useState} from "react"
import { ApplicationViews } from "./components/views/ApplicationViews"
import { Authorized } from "./components/views/Authorized"
import { MealForm } from "./components/Meals/MealForm"
import { MealList } from "./components/Meals/MealList"
import ButtonAppBar  from "./components/nav/AppBar"
import { Container } from "@mui/material"
import { MealSearch } from "./components/Meals/Search"
import PersistentDrawerLeft, { MealDrawer } from "./components/Meals/MealContainer"





export const MealManager = () => {
	const [results, setResults] = useState([])
	return (
			<Container>
				<ButtonAppBar setResults={setResults}/>
				
				{/* so button app bar is responsible for the search results */}
				
					<Routes>
		<Route path="/login" element={<Login /> } />
		<Route path="/register" element={<Register />} />
		<Route path="/create" element={<MealForm />} />
		<Route path="/meals" element={<MealList />} />
		<Route path="/" element={
			
			<Authorized>
				<>
				 <MealSearch results={results}/>
					<ApplicationViews />
				</>
			</Authorized>
			
		}/>
		</Routes>	
	</Container>
	
);
}

