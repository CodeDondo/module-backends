// controller.js
import { fetchProducts } from './model.js';
import { displayProducts } from './view.js';

export default async function init() {
    const products = await fetchProducts();
    displayProducts(products);
}
