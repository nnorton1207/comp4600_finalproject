function checkout(){
    const cartDiv = document.getElementById("cart");
    const itemContainers = cartDiv.querySelectorAll(".item-container");
    let total_price = 0;

    active_cart = [];
    itemContainers.forEach(itemContainer => {
        let item = [];
        let price = itemContainer.querySelector('h2').innerText;
        let item_name = itemContainer.querySelector('h1').innerText;
        const itemId = itemContainer.id;
        item.push(item_name);
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
    checkout_screen();
};

function checkout_screen(){
    const final_con = document.createElement('div');
    final_con.className = 'final-container';
    head = document.createElement('h1');
    head.className = 'checkout-heading';
    head.innerText = 'Final Checkout';
    final_con.appendChild(head);
    var itembox = document.createElement('div');
    itembox.className = 'item-box-con';
    itembox.id = 'item-box';
    final_con.appendChild(itembox);

    checkout_items(active_cart,itembox);
    var formdiv = document.createElement('div');
    formdiv.className = 'checkout-form';
    checkout_form(formdiv);
    final_con.appendChild(formdiv);

    const confirm = document.createElement('button');
    const cancel = document.createElement('button');
    confirm.innerText = 'Confirm order';
    confirm.className = 'confirm-btn';
    cancel.innerText = 'Cancel'
    cancel.className = 'cancel-btn';
    final_con.append(confirm);
    final_con.append(cancel);


    confirm.addEventListener('click', function () {
        alert('Order confirmed');
        window.location.reload();
    });

    cancel.addEventListener('click', function () {
        final_con.remove();
    });

    body = document.getElementsByTagName('body')[0];
    body.appendChild(final_con);
}

function checkout_form(chkcart) {
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "");

    var name = document.createElement("input");
    name.setAttribute("type", "text");
    name.setAttribute("name", "Name");
    name.setAttribute("placeholder", "Full Name");

    var tel = document.createElement("input");
    tel.setAttribute("type", "text");
    tel.setAttribute("name", "tel");
    tel.setAttribute("placeholder", "Phone number");

    var email = document.createElement("input");
    email.setAttribute("type", "text");
    email.setAttribute("name", "email");
    email.setAttribute("placeholder", "E-Mail address");

    form.appendChild(name);
    form.appendChild(email);
    form.appendChild(tel);

    chkcart.append(form);
}

function checkout_items(cart,box) {
    let total_price = 0;
    let [name, price, quantity] = [0,0,0];

    cart.forEach(item => {
        if(Array.isArray(item)){
            [name, price, quantity] = [item[0],item[1],item[2]];
            item_arr = [name,price,quantity];
            display_product(item_arr,box);

        }
        else {
            total_price = item;
            total_price *= 1.0625;
            box.append(display_total(total_price));
        }
    });
    
    console.log(total_price);
}

function display_product(item,box) {
    let item_box = document.getElementById('item-box');
    let product = document.createElement('div');
    product.className = 'product';

    let name_d = document.createElement('div');
    name_d.className = 'name';
    name_d.innerText = item[0];

    let price_d = document.createElement('div');
    price_d.className = 'price';
    price_d.innerText = item[1];

    let mult = document.createElement('div');
    mult.className = 'x';
    mult.innerText = 'X';

    let quant_d = document.createElement('div');
    quant_d.className = 'quantity';
    quant_d.innerText = item[2];

    product.append(name_d,price_d,mult,quant_d);
    box.append(product);

}

function display_total(price) {
    const container = document.createElement("div");
    const label = document.createElement("span");
    const totalPrice = document.createElement("span");
  
    container.classList.add("total-price-container");
    label.classList.add("total-price-label");
    totalPrice.classList.add("total-price");
  
    label.textContent = "Total:";
    totalPrice.textContent = `$${price.toFixed(2)}`;
  
    // Add the label and price spans to the container
    container.appendChild(label);
    container.appendChild(totalPrice);
  
    // Return the container element
    return container;
  }
