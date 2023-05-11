// export const MealSearch = ({setterFunction}) => {
//     return (
//         <div>
//         <input
//         onChange={(event) => {
//             setterFunction(event.target.value)
//         }}
//          type="text" 
//          placeholder="Enter meals"
//           />
//    </div> )
// }


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