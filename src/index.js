import { createRoot } from "react-dom/client"

import { BrowserRouter } from "react-router-dom"
import { MealManager } from "./MealManager"
import { ThemeProvider } from "@mui/material"
import theme from "./Theme"
import Theme from "./Theme"


const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
    <div style={{
				backgroundImage: `url(https://pbs.twimg.com/media/C0QH73yUsAA_F5K.jpg)`,
               height: 1450,
               width: 2000
			}}>
        <MealManager/>
       </div>
    </BrowserRouter>
)

