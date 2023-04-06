function checkout(){
    const cartDiv = document.getElementById("cart");
    const itemContainers = cartDiv.querySelectorAll(".item-container");
    let total_price = 0;

    active_cart = [];
    itemContainers.forEach(itemContainer => {
        let item = [];
        let price = itemContainer.querySelector('h2').innerText;
        const itemId = itemContainer.id;
        item.push(itemId);
        item.push(price);
        const quantitySpan = document.getElementById(itemId[0]+'q');
        const quantity = parseInt(quantitySpan.innerHTML);
        item.push(quantity);
        active_cart.push(item);
    });
    
    active_cart.forEach(i => {
        total_price += i[1]*i[2];
    })
    active_cart.push(total_price);
    console.log(active_cart);
};
