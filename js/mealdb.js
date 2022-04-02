const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const serchText = searchField.value;
    if (serchText === '') {
        console.log('Please write something')
    } else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => dispalyFood(data.meals))
        searchField.value = '';
    }


}

const dispalyFood = (meals) => {
    const serchResult = document.getElementById('serch-result')
    serchResult.textContent = '';
    meals.forEach((meal) => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="loadMeal(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
            </div>
        </div>
        `
        serchResult.appendChild(div)
    })
}

const loadMeal = meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`
    fetch(url)
        .then(res => res.json())
        .then(data => singleMealDeatile(data.meals[0]))
}

const singleMealDeatile = (meal) => {
    const mealDeatile = document.getElementById('meal-deatile');
    const div = document.createElement('div')
    mealDeatile.textContent = '';
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <h3>Category: ${meal.strCategory}</h3>
    <p>Instructions: ${meal.strInstructions.slice(0, 100)}</p>
    <a class="text-decoration-none fs-3" href="${meal.strYoutube}">Go YouTube</a>
    `
    mealDeatile.appendChild(div)
}