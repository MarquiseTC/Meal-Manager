import { Outlet, Route, Routes } from "react-router-dom"

export const ApplicationViews = () => {
	return (
		<Routes>
			<Route path="/" element={
			<>	
			<h2>Welcome to your Meal Manager</h2>
				<Outlet />
		</>	}>
		</Route>
		</Routes>
	)
	 

	
}

