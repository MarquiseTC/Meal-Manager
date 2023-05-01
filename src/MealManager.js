import { Route, Routes } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import React from "react"
import { AppBar, Container, Toolbar } from "@mui/material"
import { ButtonAppBar } from "./components/nav/AppBar"

export const MealManager = () => {
	return (
	<React.Fragment>
		<ButtonAppBar position="relative"><Toolbar>Meal Manager</Toolbar></ButtonAppBar>
		<Routes>
		<Route path="/" element={<Login />} />
		<Route path="/register" element={<Register />} />
			</Routes>	
<Container>	
	
	</Container>
	</React.Fragment>
);
}

