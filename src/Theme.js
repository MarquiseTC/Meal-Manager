import { createTheme, responsiveFontSizes } from "@mui/material"
import { blue, green, purple, red, teal } from "@mui/material/colors"



const theme = createTheme({
	palette: {
	  mode: 'light',
	  primary: {
		main: purple[500],
	  },
	  secondary: {
		main: teal[900],
	  },
	  background: {
		default: red[400],
		paper: '#fcffff',
	  },
	},
	typography: {
	  h3: {
		fontSize: '2.8rem',
	 },
	},
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    borderRadius: 20,
                }
            }
        }
    }
  })

  export default responsiveFontSizes(theme)