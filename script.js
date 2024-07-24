let cart = [];

function addToCart(productName, productPrice, productImage) {
    let item = cart.find(item => item.name === productName);

    if (item) {
        item.quantity += 1;
    } else {
        cart.push({
            id: cart.length + 1,
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }

    updateCart();

    document.getElementById('cart').scrollIntoView({ behavior: 'smooth' });
}

// Function to update cart display
function updateCart() {
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous content

    cart.forEach(function (item) {
        let li = document.createElement('li');
        li.innerHTML = `
            <div class="item-info">
                <img src="assets/${item.id}.jpg" alt="${item.name}">
                <div>
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
            </div>
            <div class="item-actions">
                <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${item.id}, this.value)">
                <a href="#" class="btn" onclick="updateQuantity(${item.id}, this.previousElementSibling.value)">Update</a>
                <a href="#" class="btn remove-btn" onclick="removeFromCart(${item.id})">Remove</a>
            </div>
        `;
        cartItems.appendChild(li);
    });
}

// Function to update quantity of an item
function updateQuantity(itemId, newQuantity) {
    let item = cart.find(item => item.id === itemId);
    item.quantity = parseInt(newQuantity);
    updateCart(); // Update cart display after changing quantity
}

// Function to remove an item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart(); // Update cart display after removing item
}

// Initial cart update (empty cart)
updateCart();