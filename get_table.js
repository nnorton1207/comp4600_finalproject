fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
        gen_container(element);
    });
  })
  .catch(error => console.error(error));

let count = 0;

 function gen_container(element){
    const menu = document.getElementById('menu');
    const ele = document.createElement('div');
    ele.className = 'item-container';
    ele.id = element.menu_item_id;
    menu.appendChild(ele);

    const img_con = document.createElement('div');
    img_con.className = "image-container";
    const place = document.createElement('img');
    img_con.appendChild(place);
    ele.appendChild(img_con);

    const item = document.createElement('div');
    let item_id = 'i' + element.menu_item_id;
    item.className = item_id;
    ele.appendChild(item);

    const price = document.createElement('h2');
    price.innerHTML = element.menu_item_price;
    item.appendChild(price);

    const head = document.createElement('h1');
    head.className = "heading";
    head.innerHTML = element.menu_item_name;
    item.appendChild(head);

    const desc = document.createElement('p');
    desc.innerHTML = element.menu_item_description;
    item.appendChild(desc);

    const counter = document.createElement('div');
    counter.className = "counter";
    ele.appendChild(counter);

    const quant_span = document.createElement('span');
    quant_span.innerHTML = 0;
    let span_id = element.menu_item_id + element.menu_item_category;
    quant_span.id = span_id;

    const inc = document.createElement('button');
    inc.className = "btn";
    inc.innerHTML = "+";
    inc.addEventListener('click', function() {
      let span_id = element.menu_item_id + element.menu_item_category;
      let quant_span = document.getElementById(span_id);
      let count = quant_span.innerHTML;
      count++;
      quant_span.innerHTML = count;
    });

    const dec = document.createElement('button');
    dec.className = "btn";
    dec.innerHTML = "-";
    dec.addEventListener('click', function() {
      let span_id = element.menu_item_id + element.menu_item_category;
      let quant_span = document.getElementById(span_id);
      let count = quant_span.innerHTML;
      let quantity = quant_span.innerHTML;
      if(quantity > 0) {
        --count;
        quant_span.innerHTML = count;
      }
    });

    counter.appendChild(inc);
    counter.appendChild(quant_span);
    counter.appendChild(dec);

    const add_btn = document.createElement('button');
    add_btn.className = "add-item-btn";
    add_btn.innerHTML = "Add to cart";
    add_btn.id = element.menu_item_id + 'btn';
    ele.appendChild(add_btn);
    add_btn.addEventListener('click', function() {
      let cart = document.getElementById('cart');
      let btn_id = add_btn.id;
      let item = document.getElementById(btn_id[0]);
      let clone = item.cloneNode(true);
      

      const buttons = clone.querySelectorAll('.btn');
      buttons.forEach(button => {
        button.remove();
      });
      cart.firstChild().appendChild(clone);
    });
    
}
