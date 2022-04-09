const testArray = [];
console.log(testArray.length);

const arrayWithStuff = [0, 1, 2, 3, 4];
console.log(arrayWithStuff.length);
console.log(arrayWithStuff[0]);

const messyArray = [5,"false", true];
console.log(messyArray);

const myShoppingCart = ["coffee","tea","la croix", "beer"];
console.log(myShoppingCart);
const lastItem = myShoppingCart.pop();
console.log(lastItem);
console.log(myShoppingCart);
myShoppingCart.push("beer");
console.log(myShoppingCart);
const fancyList = myShoppingCart.join("~~*~~");
console.log(fancyList);
console.log(myShoppingCart.join(", "));
const longWord = myShoppingCart.filter(word => word.length > 4);
console.log(longWord);
