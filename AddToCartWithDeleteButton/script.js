document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', price: 100000, imgSrc: 'assets/ph1.jpg' },
        { id: 2, name: 'Product 2', price: 150000, imgSrc: 'assets/ph2.jpg' },
        { id: 3, name: 'Product 1', price: 100000, imgSrc: 'assets/ph3.jpg' },
        { id: 4, name: 'Product 2', price: 120000, imgSrc: 'assets/ph4.jpg' },
        { id: 5, name: 'Product 1', price: 102000, imgSrc: 'assets/ph5.jpg' },
        { id: 6, name: 'Product 2', price: 202000, imgSrc: 'assets/ph1.jpg' },
        { id: 7, name: 'Product 1', price: 125000, imgSrc: 'assets/ph2.jpg' },
        { id: 8, name: 'Product 2', price: 125999, imgSrc: 'assets/ph3.jpg' },
        
        // Add more products as needed
    ];

    const cart = [];
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const productList = document.getElementById('product-list');

    // Function to display products
    function displayProducts() {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.dataset.id = product.id;
            productElement.innerHTML = `
                <img src="${product.imgSrc}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>₹${product.price.toFixed(2)}</p>
                <button class="add-to-cart">Add to Cart</button>
            `;
            productList.appendChild(productElement);
        });

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const productElement = e.target.closest('.product');
                const productId = productElement.dataset.id;
                const product = products.find(p => p.id == productId);
                addToCart(product);
            });
        });
    }

    // Function to add product to cart
    function addToCart(product) {
        cart.push(product);
        updateCart();
    }

    // Function to update cart
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        cart.forEach((product, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${product.imgSrc}" alt="${product.name}">
                <p>${product.name}</p>
                <p>₹${product.price.toFixed(2)}</p>
                <button class="remove-from-cart" data-index="${index}">Delete</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        cartCount.textContent = cart.length;
        totalPriceElement.textContent = cart.reduce((total, product) => total + product.price, 0).toFixed(2);

        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.dataset.index;
                cart.splice(index, 1);
                updateCart();
            });
        });
    }

    document.getElementById('checkout').addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Proceeding to payment...');
    
        } else {
            alert('Your cart is empty.');
        }
    });
    displayProducts();
});
