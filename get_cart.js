function checkout(){
    const cartDiv = document.getElementById("cart");
    const itemContainers = cartDiv.querySelectorAll(".item-container");
    active_cart = [];
    itemContainers.forEach(itemContainer => {
        let item = [];
        const itemId = itemContainer.id;
        item.push(itemId);
        const quantitySpan = document.getElementById(itemId[0]+'q');
        const quantity = parseInt(quantitySpan.innerHTML);
        item.push(quantity);
        active_cart.push(item);
    });
    console.log(active_cart);
};
