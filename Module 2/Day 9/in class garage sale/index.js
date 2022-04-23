const itemsForSaleEl = document.getElementById("itemsForSale-slot")
const itemsForSale= [{
    id: "coffee-pot",
    name: "Coffee Pot",
    price: 59.99,
    description: "It makes coffee",
    imageSrc: "https://i.pinimg.com/originals/0d/77/d4/0d77d427e6c6b9cd9711e3ab0e9d997b.jpg",
    quantity: 1
},
{
    id: "coffee-beans",
    name: "Coffee Beans",
    price: 15.95,
    description: "The coffee",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmW8orVOKtJyIAhnH87DTIpYOGHbghicbSOEIsEhh-UxiHgtkBoDn9rxz6AGtoP1X2MA&usqp=CAU",
    quantity: 1
}];

const shoppingCart = [];
function addItemToCart (id) {
    shoppingCart.push(id);
}
function itemToDisplayHtml(item) {
    const html = `
        <div class = "item-card"><h2>${item.name}</h2>
        <img src = ${item.imageSrc}>
        <h3>$${item.price}</h3>
        <p>${item.description}</p>
        <button onclick="addItemToCart('${item.id}')">Add To Cart</button>
        </div>
    `
    return html;
}

function addItemsForSaleToPage () {
    for (var i =0; i <itemsForSale.length; i++) {
        const item = itemsForSale[i];
        const htmlForItem = itemToDisplayHtml(item);
        const appendableElement =document.createElement('div');
        appendableElement.innerHTML = htmlForItem;
        itemsForSaleEl.append(appendableElement);
    }
}
addItemsForSaleToPage();