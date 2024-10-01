export default async function dummyjson() {
    fetch('https://dummyjson.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Du kan håndtere data her
            // Gør noget med data her, hvis du ikke vil returnere det direkte
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
};