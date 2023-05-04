export const getMeals = (userId) => {
    return fetch(`http://localhost:8088/meals?userId=${userId}`)
    .then(response => response.json())}