import React from "react";
import { MealList } from "./MealList";
import { MealSearchResults } from "./SearchResults";


export const MealSearch = ({results}) => {
    return <div>
        {results.map((result, id) =>{
            return <MealSearchResults result={result} key={id}/>

        })
       } 
       </div>
    
 }