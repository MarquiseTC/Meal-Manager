import { Drawer } from "@mui/material";
import {Typography} from "@mui/material";
import React from "react";



export const Layout =({children}) => {
    return (
        <div>
            {/* app bar */}
           <Drawer>
            
            <div>
                <Typography variant="h5">

                </Typography>
            </div>
           </Drawer>
            <div>
            {children}  
            </div>
            
        </div>
        )
}