import { useState } from "react";

export const Favorite = () =>{
    const [favorite, setFavorite] =useState(false)
    const localMealUser = localStorage.getItem("MM_user")
     const mealUserObject = JSON.parse(localMealUser) 
     





    return (
       <div>
            Favorites coming soon
        </div>
    );
};

