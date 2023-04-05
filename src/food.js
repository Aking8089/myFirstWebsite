//DomSelectors
const searchform = document.getElementById("searchForm")
const searchInput = document.getElementById("search")
const searchBtn = document.getElementById("btn")
const cards = document.getElementById("cards")
const filtersDropDown = document.getElementById("filtersDropDown")
const fDropDown = document.getElementById("dropdown")
const latestBtn = document.getElementById("randombtn")
const sidebar = document.getElementById("sidebar")
//FILTERS DROP DOWN
const filtersData = {
    "Ingredients": "ingredients",
    "Categories": "categories",
    "Areas": "areas",
    "First Letter": "first-letter",
    "Random Meal": "random-meal"
}

let key = (filtersData) => {
    let option = document.createElement("option");
    option.setAttribute('value', `${filtersData[key]}`);
  
    let optionText = document.createTextNode(key);
    option.appendChild(optionText);
  
    filtersDropDown.appendChild(option);
}

filtersDropDown.addEventListener("change", (e) => {
    fDropDown.innerHTML = e.target.value;
  });

// fetches
const fetchMeals = () => {
    fetch(`${apiKey}search.php?s=${searchInput.value}`)
      .then(response => response.json())
      .then(mealObj => {
        console.log(mealObj);
        let allMeals = mealObj.meals;
        cards.innerHTML = "";
        allMeals.forEach(meal => {
          renderMeal(meal);
        });
      });
  };
  
  searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchMeals();
  });
const renderMeal = (meal) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="card-info">
      <img id="img" src=${meal.strMealThumb}>
      <h2 id="card-name">${meal.strMeal}</h2>
      <p id="card-area">${meal.strArea}</p>
      <p id="card-catagory">${meal.strCategory}</p>
      <p id="card-ingredients">${"Ingredients: " + meal.strIngredient1 + ", " + meal.strIngredient2 + ", " + meal.strIngredient3 + ", " + meal.strIngredient4 + ", " + meal.strIngredient5 + ", " + meal.strIngredient6 + ", " + meal.strIngredient7 + ", " + meal.strIngredient8 + ", " + meal.strIngredient9 + ", " + meal.strIngredient10 + ", " + meal.strIngredient11 + ", " + meal.strIngredient12 + ", " + meal.strIngredient13 + ", " + meal.strIngredient14 + ", " + meal.strIngredient15 + ", " + meal.strIngredient16 + ", " + meal.strIngredient17 + ", " + meal.strIngredient18 + ", " + meal.strIngredient19 + ", " + meal.strIngredient20 }</p>
      <p id="card-instructions">${meal.strInstructions}</p>
      <p id="card-measure">${"Measurements: " + meal.strMeasure1 + ", " + meal.strMeasure2 + ", " + meal.strMeasure3 + ", " + meal.strMeasure4 + ", " + meal.strMeasure5 + ", " + meal.strMeasure6 + ", " + meal.strMeasure7 + ", " + meal.strMeasure8 + ", " + meal.strMeasure9 + ", " + meal.strMeasure10 + ", " + meal.strMeasure11 + ", " + meal.strMeasure12 + ", " + meal.strMeasure13 + ", " + meal.strMeasure14 + ", " + meal.strMeasure15 + ", " + meal.strMeasure16 + ", " + meal.strMeasure17 + ", " + meal.strMeasure18 + ", " + meal.strMeasure19 + ", " + meal.strMeasure20}</p>
    </div>`
    sidebar.append(card)
}
const latestFetch = () => {
fetch(`${apiKey}latest.php`)
.then(response => response.json())
.then(mealObj => {
  console.log(mealObj);
  let allMeals = mealObj.meals;
  cards.innerHTML = "";
  allMeals.forEach(meal => {
    renderLatest(meal);
  });
});
}
const renderLatest = (meal) => {
    latestBtn.addEventListener("click", (e) => {
    const latestCard = document.createElement("div");
    latestCard.classList.add("latestCard");
    latestCard.innerHTML = `
    <div class="latestCard-info">
      <img id="img" src=${meal.strMealThumb}>
      <h2 id="latestCard-name">${meal.strMeal}</h2>
      <p id="latestCard-area">${meal.strArea}</p>
      <p id="latestCard-catagory">${meal.strCategory}</p>
      <p id="latestCard-ingredients">${"Ingredients: " + meal.strIngredient1 + ", " + meal.strIngredient2 + ", " + meal.strIngredient3 + ", " + meal.strIngredient4 + ", " + meal.strIngredient5 + ", " + meal.strIngredient6 + ", " + meal.strIngredient7 + ", " + meal.strIngredient8 + ", " + meal.strIngredient9 + ", " + meal.strIngredient10 + ", " + meal.strIngredient11 + ", " + meal.strIngredient12 + ", " + meal.strIngredient13 + ", " + meal.strIngredient14 + ", " + meal.strIngredient15 + ", " + meal.strIngredient16 + ", " + meal.strIngredient17 + ", " + meal.strIngredient18 + ", " + meal.strIngredient19 + ", " + meal.strIngredient20 }</p>
      <p id="latestCard-instructions">${meal.strInstructions}</p>
      <p id="latestCard-measure">${"Measurements: " + meal.strMeasure1 + ", " + meal.strMeasure2 + ", " + meal.strMeasure3 + ", " + meal.strMeasure4 + ", " + meal.strMeasure5 + ", " + meal.strMeasure6 + ", " + meal.strMeasure7 + ", " + meal.strMeasure8 + ", " + meal.strMeasure9 + ", " + meal.strMeasure10 + ", " + meal.strMeasure11 + ", " + meal.strMeasure12 + ", " + meal.strMeasure13 + ", " + meal.strMeasure14 + ", " + meal.strMeasure15 + ", " + meal.strMeasure16 + ", " + meal.strMeasure17 + ", " + meal.strMeasure18 + ", " + meal.strMeasure19 + ", " + meal.strMeasure20}</p>
    </div>`
    cards.append(latestCard)
    console.log(e.target)
})
}
// const randomFetch = () => {
// fetch(`${apiKey}random.php`)
// .then(response => response.json())
// .then(mealObj => {
//     console.log(mealObj);
//     let allMeals = mealObj.meals;
//     cards.innerHTML = "";
//     allMeals.forEach(meal => {
//     renderRandom(meal);
//     });
// });
// }
// const renderRandom = (meal) => {
//     document.querySelector("#random-meal").addEventListener("click", (e) => {
//     const randomCard = document.createElement("div");
//     randomCard.classList.add("randomCard");
//     randomCard.innerHTML = `
//     <div class="randomCard-info">
//         <img id="img" src=${meal.strMealThumb}>
//         <h2 id="randomCard-name">${meal.strMeal}</h2>
//         <p id="randomCard-area">${meal.strArea}</p>
//         <p id="randomCard-catagory">${meal.strCategory}</p>
//         <p id="randomCard-ingredients">${"Ingredients: " + meal.strIngredient1 + ", " + meal.strIngredient2 + ", " + meal.strIngredient3 + ", " + meal.strIngredient4 + ", " + meal.strIngredient5 + ", " + meal.strIngredient6 + ", " + meal.strIngredient7 + ", " + meal.strIngredient8 + ", " + meal.strIngredient9 + ", " + meal.strIngredient10 + ", " + meal.strIngredient11 + ", " + meal.strIngredient12 + ", " + meal.strIngredient13 + ", " + meal.strIngredient14 + ", " + meal.strIngredient15 + ", " + meal.strIngredient16 + ", " + meal.strIngredient17 + ", " + meal.strIngredient18 + ", " + meal.strIngredient19 + ", " + meal.strIngredient20 }</p>
//         <p id="randomCard-instructions">${meal.strInstructions}</p>
//         <p id="randomCard-measure">${"Measurements: " + meal.strMeasure1 + ", " + meal.strMeasure2 + ", " + meal.strMeasure3 + ", " + meal.strMeasure4 + ", " + meal.strMeasure5 + ", " + meal.strMeasure6 + ", " + meal.strMeasure7 + ", " + meal.strMeasure8 + ", " + meal.strMeasure9 + ", " + meal.strMeasure10 + ", " + meal.strMeasure11 + ", " + meal.strMeasure12 + ", " + meal.strMeasure13 + ", " + meal.strMeasure14 + ", " + meal.strMeasure15 + ", " + meal.strMeasure16 + ", " + meal.strMeasure17 + ", " + meal.strMeasure18 + ", " + meal.strMeasure19 + ", " + meal.strMeasure20}</p>
//     </div>`
//     cards.append(randomCard)
//     console.log(e.target)
// })
// }

latestFetch();
// randomFetch();