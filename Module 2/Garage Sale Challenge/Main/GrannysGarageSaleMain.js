//***ADDED IF STATEMENTS TO ALLOW FOR MULTIPLE HTML */
//elements
const productsEl = document.querySelector('.itemForSale');
const cartItemsEl = document.querySelector('.cart-items');
const subtotalEl = document.querySelector('.subtotal');
const totalItemsInCartEl = document.querySelector('.total-items-in-cart');
//render products
function renderProducts () {
  products.forEach( (product) => {
    if(productsEl) productsEl.innerHTML += ` 
      <div class="col-lg-4 col-md-6 d-flex justify-content-center gy-5">
        <div class="card" style="width: 20rem;">    
          <div class="item">
            <img src="${product.imgSrc}" alt ="${product.altImg}" title="${product.altImg}" class="card-img-top itemForSale-img">
          </div>
        <div class="card-body">
          <h5 class="card-title header-3">${product.name}</h5>
          <h5 class="card-text paragraph2-1" style="color: #75bb01;">$${product.price.toLocaleString('en-US')}</h5>
          <p class="card-text paragraph2-2">${product.description}</p>
        </div>
        <div class="d-grid gap-2">
        <button id="added${product.id}" class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
        </div>
      </div>`;
  })
}
renderProducts();
// popups
function centeredPopup(url,winName,w,h,scroll){
    LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
    TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
    settings =
    'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable'
    popupWindow = window.open(url,winName,settings)
    }
//cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();
//add to cart
function addToCart(id) {
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id)
    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }
  updateCart();
}
//update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();
  //save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}
//render cart with subtotal
function renderSubtotal () {
  let totalPrice = 0, 
  totalItems = 0;
  cart.forEach((item) => {
      totalPrice += item.price * item.numberOfUnits;
      totalItems += item.numberOfUnits;
  });
  if(subtotalEl) subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${(+totalPrice.toFixed(2)).toLocaleString('en-US')}`;
  if(totalItemsInCartEl) totalItemsInCartEl.innerHTML = totalItems;
}
function renderCartItems() {
  if (cartItemsEl) cartItemsEl.innerHTML="";
  if (cartItemsEl) cart.forEach((item) => {
    cartItemsEl.innerHTML += `                
      <div class= "row highlight align-items-center">
      <div class="col-4 item${item.id}"><img src="${item.imgSrc}" height="100vh">
        <p class='paragraph2-2'>${item.name}</p></div>
        <div class="col-4 align-items-center"><button class=removeButton onclick="removeItemFromCart(${item.id})">Remove</button></div>
      <div class="col-4 price${item.id} paragraph2-2">$${item.price.toLocaleString('en-US')}</div>
      </div>
    <hr>
    `
  })
}
//remove items
function removeItemFromCart(id) {
  cart = cart.filter( (item) => item.id !== id);
  updateCart();
}
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits
    if(item.id === id) {
      if(action === 'minus' && numberOfUnits >1) {
        numberOfUnits--;
      } else {
        if(action === 'plus' && numberOfUnits < item.instock) {
          numberOfUnits++;
        }
      }
    }
    return {
      ...item,
      numberOfUnits,
    }
  })
}
updateCart();
// disable buttons after click - there's probably a better way to do this but I RAN OUT OF TIME
const productAdded0 = document.getElementById("added0");
function disableButton0 () {
  if(cart.some((item) => item.id === 0)) {
    productAdded0.disabled=true;
    productAdded0.innerHTML = 'Added to Cart';
  }
}
disableButton0();
if(productAdded0) productAdded0.addEventListener('click', disableButton0);
const productAdded1 = document.getElementById("added1");
function disableButton1 () {
  if(cart.some((item) => item.id === 1)) {
    productAdded1.disabled=true;
    productAdded1.innerHTML = 'Added to Cart';
  }
}
disableButton1();
if(productAdded1) productAdded1.addEventListener('click', disableButton1);
const productAdded2 = document.getElementById("added2");
function disableButton2 () {
  if(cart.some((item) => item.id === 2)) {
    productAdded2.disabled=true;
    productAdded2.innerHTML = 'Added to Cart';
  }
}
disableButton2();
if(productAdded2) productAdded2.addEventListener('click', disableButton2);
const productAdded3 = document.getElementById("added3");
function disableButton3 () {
  if(cart.some((item) => item.id === 3)) {
    productAdded3.disabled=true;
    productAdded3.innerHTML = 'Added to Cart';
  }
}
disableButton3();
if(productAdded3) productAdded3.addEventListener('click', disableButton3);
const productAdded4 = document.getElementById("added4");
function disableButton4 () {
  if(cart.some((item) => item.id === 4)) {
    productAdded4.disabled=true;
    productAdded4.innerHTML = 'Added to Cart';
  }
}
disableButton4();
if(productAdded4) productAdded4.addEventListener('click', disableButton4);
const productAdded5 = document.getElementById("added5");
function disableButton5 () {
  if(cart.some((item) => item.id === 5)) {
    productAdded5.disabled=true;
    productAdded5.innerHTML = 'Added to Cart';
  }
}
disableButton5();
if(productAdded5) productAdded5.addEventListener('click', disableButton5);
const checkoutBtn = document.getElementById("checkout");
function disableCheckoutBtn () {
  if(cart.length===0) {
  checkoutBtn.disabled=true;
  checkoutBtn.innerHTML="Nothing to Checkout";
}
}disableCheckoutBtn();
