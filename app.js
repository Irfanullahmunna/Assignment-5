// Start Assignment JavaScript Final Code 
document.getElementById('search-button').addEventListener('click', () => {
    const inputMealName = document.getElementById('input-text').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
    fetch(url + inputMealName)
    .then(res => res.json())
    .then(data => displayMeal(data))
    .catch(error => {
        document.getElementById("meal-details").innerHTML = `
        <p>Not available right now sir! <br>Try another one please..</p>
        `;
    });
});

const displayMeal = data => {
    const mealDiv = document.getElementById('meal-list');
    document.getElementById('meal-list').innerHTML = ``;
    data['meals'].forEach(meal => {
        const mealItem = document.createElement('div');
        mealItem.className = 'items';
        const mealInfo = `
            <img src = ${meal.strMealThumb}>
            <h4>${meal.strMeal}</h4>
        `;
        mealItem.innerHTML = mealInfo;
        mealDiv.appendChild(mealItem);
        mealItem.addEventListener('click', () => {
            document.getElementById('meal-details').innerHTML = `
                <img src = ${meal.strMealThumb}>
                <h3>${meal.strMeal}</h3>
                <li><input type="checkbox" checked>${meal.strIngredient1}</li>
                <li><input type="checkbox" checked>${meal.strIngredient2}</li>
                <li><input type="checkbox" checked>${meal.strIngredient3}</li>
                <li><input type="checkbox" checked>${meal.strIngredient4}</li>
                <li><input type="checkbox" checked>${meal.strIngredient5}</li>
            `;
        });
    });
}
// End Assignment JavaScript Final Code






// Working JavaScript Code

// document.getElementById('search-button').addEventListener('click', () => {
//     const inputMeal = document.getElementById('input-text').value;
//     fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputMeal)
//         .then(res => res.json())
//         .then(data => {
//             const mealDiv = document.getElementById('meal-list');
//             document.getElementById('meal-list').innerHTML = ``;
//             for (let i = 0; i < data['meals'].length; i++) {
//                 const mealItem = document.createElement('div');
//                 mealItem.className = 'items';
//                 meal = data['meals'][i];
//                 const mealInfo = `
//                 <img src = ${meal.strMealThumb}>
//                 <h4>${meal.strMeal}</h4>
//                 `;
//
//                 mealItem.innerHTML= mealInfo;
//                 mealDiv.appendChild(mealItem);
//
//
//
//                 mealItem.addEventListener('click', () => {
//                     document.getElementById('meal-details').innerHTML=`
//                     <img src= ${data['meals'][i].strMealThumb}> 
//                     <h3> ${data['meals'][i].strMeal}</h3>
//                     <li><input type="checkbox" checked> ${data['meals'][i].strIngredient1}</li>
//                     <li><input type="checkbox" checked> ${data['meals'][i].strIngredient2}</li>
//                     <li><input type="checkbox" checked> ${data['meals'][i].strIngredient3}</li>
//                     <li><input type="checkbox" checked> ${data['meals'][i].strIngredient4}</li>
//                     <li><input type="checkbox" checked> ${data['meals'][i].strIngredient5}</li>
//                     `;
//                 })
//             }
//         })
// })
