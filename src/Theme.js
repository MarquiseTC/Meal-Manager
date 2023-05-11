import { createTheme, responsiveFontSizes } from "@mui/material"
import { blue, green, red } from "@mui/material/colors"



const theme = createTheme({
	palette: {
	  mode: 'light',
	  primary: {
		main: blue[900],
	  },
	  secondary: {
		main: green[500],
	  },
	  background: {
		default: red[50],
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