document.addEventListener('DOMContentLoaded', () => {
    const mealdb = document.getElementById('my-container');

    themealdb(); // Kalder funktionen når DOM'en er klar
});

export default async function themealdb() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Henter som tekst (HTML)
        })
        .then(html => {
            document.getElementById('my-container').innerHTML = html; // Indsætter HTML i div'en
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
};