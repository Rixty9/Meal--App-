const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const mealContainer = document.getElementById("mealContainer");

//Click on search button

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim();

    if (searchTerm !== "") {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then((response) => response.json())
            .then((data) => {
                displayMeals(data.meals);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }
});

//main function of display meal

function displayMeals(meals) {
    mealContainer.innerHTML = "";

    if (meals === null) {
        mealContainer.innerHTML = "<p>No meals found.</p>";
        return;
    }

    meals.forEach((meal) => {
        const mealCard = document.createElement("div");
        mealCard.classList.add("meal-card");
        mealCard.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
            <p>${meal.strCategory}</p>
            <p>${meal.strArea}</p>
        `;

        mealContainer.appendChild(mealCard);
    });
}
