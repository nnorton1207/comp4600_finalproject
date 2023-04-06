function add_items(){
    const items = document.querySelectorAll('div.item-container');
    const cart = document.getElementById('cart');
    items.forEach(element => {
        var clone = element.cloneNode(true);
        cart.appendChild(clone);
    });
}
