// view.js
export function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Ryd eksisterende indhold

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement('h2');
        productName.textContent = product.name;

        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productContainer.appendChild(productDiv);
    });
}
