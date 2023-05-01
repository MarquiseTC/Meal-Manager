import { Stack, TextField,Button, Container } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import React from "react"


export const Register = (props) => {
    const [user, setUser] = useState({
        name: "",
        email: ""
        
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("MM_user", JSON.stringify({
                        id: createdUser.id,
                        
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        console.log(user.email)
        return fetch(`http://localhost:8088/users?email=${user.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateUser = (evt) => {
        const copy = {...user}
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    return (
        <React.Fragment>
            <h2>Registration Form</h2>
            <form onSubmit={handleRegister} action={<Link to="/" />}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                <TextField 
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Name"
                    onChange={(event) => {
                        const copy = {...user}
                        copy.name = event.target.value
                        setUser(copy)
                    }}
                    value={user.name}
                    fullWidth
                    required
                    />
                    <TextField
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Email"
                    onChange={(event) => {
                        const copy = {...user}
                        copy.email = event.target.value
                        setUser(copy)
                    }}
                    value={user.email}
                    fullWidth
                    required
                    />
                </Stack>
                <Button variant="outlined" color="secondary" type="submit">Complete</Button>
            <small>Already signed up? <Link to="/">Return to login</Link></small>
            </form>
        </React.Fragment>
    )
}

