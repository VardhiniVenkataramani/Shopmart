// Basic filter functionality
const categoryFilter = document.getElementById('category-filter');
const priceRange = document.getElementById('price-range');
const priceLabel = document.getElementById('price-label');
const productCards = document.querySelectorAll('.product-card');

categoryFilter.addEventListener('change', filterProducts);
priceRange.addEventListener('input', () => {
    priceLabel.textContent = `₹0 - ₹${priceRange.value}`;
    filterProducts();
});

function filterProducts() {
    const category = categoryFilter.value;
    const maxPrice = priceRange.value;

    productCards.forEach(card => {
        const price = parseInt(card.querySelector('p').innerText.replace('₹', ''));
        const productCategory = card.querySelector('h3').innerText.toLowerCase();

        if ((category === 'all' || productCategory.includes(category)) && price <= maxPrice) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Cart Logic
let cartCount = 0;
document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        cartCount++;
        document.querySelector('.cart').textContent = `Cart (${cartCount})`;
        alert('Item added to cart!');
    });
});
