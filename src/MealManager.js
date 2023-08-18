import { Route, Routes } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import React,{useState} from "react"
import { ApplicationViews } from "./components/views/ApplicationViews"
import { Authorized } from "./components/views/Authorized"
import { MealForm } from "./components/Meals/MealForm"
import { MealList } from "./components/Meals/MealList"
import ButtonAppBar  from "./components/AppBar/AppBar"
import { Container, Toolbar } from "@mui/material"
import {createTheme,ThemeProvider} from "@mui/material/"
import { EditMeal } from "./components/Meals/MealEdit"
import { Favorite } from "./components/Meals/FavoritesList"
import { Info } from "./components/Meals/Info"
import { BarGraph } from "./components/Meals/Charts"


const theme = createTheme({
	palette: {
	  mode: 'light',
	  primary: {
		main: '#174ace',
	  },
	  secondary: {
		main: '#ff0101',
	  },
	  background: {
		default: '#eeeeee',
		paper: '#fcffff',
	  },
	},
	typography: {
	  h3: {
		fontSize: '2.8rem',
	 },
	},
  })


export const MealManager = () => {
	return (
	<ThemeProvider theme={theme}>
			<Container>
				
				<ButtonAppBar/>
				<Toolbar></Toolbar>
				
				
					<Routes>
		<Route path="/login" element={<Login /> } />
		<Route path="/register" element={<Register />} />
		<Route path="/meals/create" element={<MealForm />} />
		<Route path="/meals" element={<MealList/>} />
		<Route path="meals/:mealId/edit" element={<EditMeal/>} />
		<Route path="/favorites" element={<Favorite/>} />
		<Route path="/info" element={<Info/>} />
		<Route path="/graphs" element={<BarGraph/>} />
		<Route path="/" element={
			
			<Authorized>
				<>
				 
					<ApplicationViews />
				</>
			</Authorized>
			
		}/>
		</Routes>
		
	</Container>
	</ThemeProvider>
);
}

