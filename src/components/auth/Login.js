import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { TextField, FormControl, Button } from "@mui/material";


export const Login = () => {
    const [email, set] = useState("")
    const navigate = useNavigate()
    

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(email)

        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("MM_user", JSON.stringify({
                        id: user.id,
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
    <React.Fragment>
        <form autoComplete="off" onSubmit={handleLogin} action={<Link to="/meals.${userId}" />}>
            <h2> Meal Manager Login</h2>
            <TextField
            label="Email"
            onChange={evt => set(evt.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="email"
            sx={{mb:2}}
            fullWidth
            value={email}
            />
            <Button variant="outlined" color="secondary" type="sumbit">Sign in</Button>
        </form>
        <small>Need to register? <Link to="/register">Register here</Link></small>
    </React.Fragment>

)}