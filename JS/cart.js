const addProduct = () =>{
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    displayProduct(product,quantity);
    saveProductToLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) =>{
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}

const getLocalStoredShoppingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product,quantity) =>{
    const cart = getLocalStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
    // console.log(cart);
}

const displayProductFromLocalStorage = () =>{
    const saveCart = getLocalStoredShoppingCart();
    for(const product in saveCart){
        const quantity = saveCart[product];
        // console.log(product, quantity)
        displayProduct(product,quantity);
    }
    // console.log(saveCart.laptop);
}

displayProductFromLocalStorage();