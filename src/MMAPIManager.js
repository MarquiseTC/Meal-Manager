export const getMeals = (userId) => {
    return fetch(`http://localhost:8088/meals?userId=${userId}`)
    .then(response => response.json())}


    export const getMealEdit = (mealId) => {
        return fetch(`http://localhost:8088/meals/${mealId}`)
        .then(response => response.json())
     }

     export const saveMealEdit = (meal) => {
        return fetch(`http://localhost:8088/meals/${meal.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(meal)
            })
                .then(response => response.json())
            }