import { createRoot } from "react-dom/client"

import { BrowserRouter } from "react-router-dom"
import { MealManager } from "./MealManager"
import { ThemeProvider } from "@mui/material"
import theme from "./Theme"


const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
    <ThemeProvider theme={theme}>
        <MealManager/>
        </ThemeProvider>
    </BrowserRouter>
)

