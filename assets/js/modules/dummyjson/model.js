// model.js
export async function fetchProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.products; // Returner kun produkterne
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return [];
    }
}