// CART
// REMOVE BUTTONS
const removeFromCart = document.getElementById("remove")
console.log(removeFromCart);
for (var i = 0; i < removeFromCart.length; i++) {
    const removeButton = removeFromCart[i]
    removeButton.addEventListener('click',function (event) {
        const buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}
