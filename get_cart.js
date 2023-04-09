function checkout() {
  const cartDiv = document.getElementById("cart");
  const itemContainers = cartDiv.querySelectorAll(".item-container");
  let total_price = 0;

  active_cart = [];
  itemContainers.forEach((itemContainer) => {
    let item = [];
    let price = itemContainer.querySelector("h2").innerText;
    const itemId = itemContainer.id;
    item.push(itemId);
    item.push(price);
    const quantitySpan = document.getElementById(itemId[0] + "q");
    const quantity = parseInt(quantitySpan.innerHTML);
    item.push(quantity);
    active_cart.push(item);
  });

  active_cart.forEach((i) => {
    total_price += i[1] * i[2];
  });
  active_cart.push(total_price);

  console.log(active_cart);
  // call pop-up form
  showPopupForm(active_cart);
}

function showPopupForm(active_cart) {
  let popupForm = document.querySelector(".popup");
  // prevent duplicate forms
  if (popupForm) {
    popupForm.remove();
  }

  popupForm = document.createElement("div");
  popupForm.classList.add("popup");

  const popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");
  popupForm.appendChild(popupContent);

  // creating class for contents of div
  const totalPrice = document.createElement("p");
  totalPrice.classList.add("totalprice-content");

  // get last item from the array(from cart)
  let amount = `Total: $${active_cart[active_cart.length - 1]}`;
  totalPrice.innerText = amount;
  popupContent.appendChild(totalPrice);

  // close button, needs to be changed, using a times symbol as a placeholder
  const exitButton = document.createElement('span');
  exitButton.classList.add('close-button');
  exitButton.innerHTML = 'x';
  // close out pop-up form
  exitButton.addEventListener('click', () => {
    popupForm.remove();
  });
  popupContent.insertBefore(exitButton, popupContent.firstChild);

  document.body.appendChild(popupForm);

  // styling for div itself
  popupForm.style.display = "block";
  popupForm.style.backgroundColor = "white";
  popupForm.style.borderRadius = "8px";
  popupForm.style.position = "fixed";
  popupForm.style.top = "0";
  popupForm.style.marginTop = "100px";
  popupForm.style.width = "250px";
  popupForm.style.height = "100px";

  popupContent.style.fontSize = "18px";

  totalPrice.style.marginLeft = "3px";

  exitButton.style.backgroundColor = "red";
  exitButton.style.padding = "0px";
  exitButton.style.borderRadius = "8px";
  exitButton.style.marginLeft = "3px";
  exitButton.style.marginTop = "3px";
}