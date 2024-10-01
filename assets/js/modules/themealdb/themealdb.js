document.addEventListener('DOMContentLoaded', () => {
    loadMultipleMeals(10); // Henter 10 tilfældige måltider, når DOM'en er klar
});

// Funktion til at hente et tilfældigt måltid fra API'et
async function fetchRandomMeal() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.meals[0]; // Returnerer det første måltid fra API'et
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Funktion til at hente flere måltider og tilføje dem til DOM'en som links
async function loadMultipleMeals(count) {
    const mealdb = document.getElementById('my-container');
    mealdb.innerHTML = ''; // Rydder containeren, inden vi indsætter nye links

    const mealsArray = [];

    for (let i = 0; i < count; i++) {
        const meal = await fetchRandomMeal();
        if (meal) {
            mealsArray.push(meal);
        }
    }

    // Tilføjer links til DOM'en for hvert måltid
    mealsArray.forEach(meal => {
        const mealLink = document.createElement('a');
        mealLink.href = '#'; // Gør linket internt, så vi ikke forlader siden
        mealLink.textContent = meal.strMeal; // Viser måltidets navn som linktekst
        mealLink.addEventListener('click', (e) => {
            e.preventDefault(); // Forhindrer den normale linkopførsel
            displayRecipe(meal); // Kalder funktionen til at vise opskriften
        });
        mealdb.appendChild(mealLink);

        // Tilføjer en line break mellem hvert link
        const lineBreak = document.createElement('br');
        mealdb.appendChild(lineBreak);
    });
}

// Funktion til at vise opskriften i DOM'en
function displayRecipe(meal) {
    const mealdb = document.getElementById('my-container');
    mealdb.innerHTML = ''; // Rydder containeren for at vise opskriften

    const mealTitle = document.createElement('h2');
    mealTitle.textContent = meal.strMeal;

    const mealImage = document.createElement('img');
    mealImage.src = meal.strMealThumb;
    mealImage.alt = meal.strMeal;

    const mealInstructions = document.createElement('p');
    mealInstructions.textContent = meal.strInstructions;

    const ingredientsList = document.createElement('ul');
    
    // Tilføjer ingredienser til listen
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient) {
            const listItem = document.createElement('li');
            listItem.textContent = `${ingredient} - ${measure}`;
            ingredientsList.appendChild(listItem);
        }
    }

    // Tilføj elementer til DOM'en
    mealdb.appendChild(mealTitle);
    mealdb.appendChild(mealImage);
    mealdb.appendChild(mealInstructions);
    mealdb.appendChild(ingredientsList);
}

// Eksporterer loadMultipleMeals som standard funktion
export default loadMultipleMeals;
