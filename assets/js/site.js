// main.js
import init from './modules/dummyjson/controller.js';

export default async function dummyjson() {
    await init(); // Kalder init for at hente og vise produkterne
}

// Når DOM'en er klar, kalder vi dummyjson
document.addEventListener('DOMContentLoaded', dummyjson);
