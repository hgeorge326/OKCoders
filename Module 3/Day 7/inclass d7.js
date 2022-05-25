// Without FP
const arr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenArr1 = []
 for (let i = 0; i < arr1.length; i++) {
     if(arr1[i] % 2 === 0) {
     evenArr1.push(arr1[i])};
 }
 console.log(`evenArr1 is ${evenArr1}`)

 /**Functional Programming
  * Ignore most of FP but two concepts make us better JS developers
  * 1. Make our code clean using functions
  * 2.immutability - don't mutate data structures - COPY THEM
 */

 //finding a particular array element
 //example find cabbage
 const plants = ['brocoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
 let found1;
 for(let i=0; i < plants.length; i++) {
     if (plants [i] === 'cabbage') {
         found1 = plants[i]
     }
 }
 console.log(`Found the cabbage!: `, found1)

 const plants2 = ['brocoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
 let found2;
 while (plants2.length > 0) {
     let plant = plants2.pop()
     if (plant ==='cabbage') {
         found2 = plant;
         break;
     }
 }
 console.log(`Found the cabbage!: `, found2)
 //Three Main Array Methods: map, filter, reduce
 //find, findIndex, forEach
//  With FP
const arr2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenArr2 = arr2.filter((number) => number % 2 === 0);
console.log(`evanArr2 is ${evenArr1}`);

//filter gives array entry
const plants4 = ['brocoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
let found4 = plants4.filter((plant) => plant === 'cabbage');
console.log(`is this cabbage?`, found4)
//find gives value
const plants5 = ['brocoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
let found5 = plants5.find((plant) => plant === 'cabbage');
console.log(`is this cabbage?`, found5)

//Principle: don't mutate/change. Make copies
const data = {name: "Heather George", age: 35, height: 55};
function incrementAge(personObject) {
    personObject.age += 1;
    return personObject; 
}
function incrementHeight(personObject) {
    personObject.height += 1;
    return personObject;
}
function doSomethingWithName(personObject) {
    const copy = {...personObject};
    copy.name = 'John Doe'
    return copy;
}
const returnedFromIncrementAge = incrementAge(data);
const returnedFromIncrementHeight = incrementHeight(data);
const returnedFromDoSomethingWithName = doSomethingWithName(data);
console.log(data);
console.log(`age`, returnedFromIncrementAge)
console.log(`height`, returnedFromIncrementHeight)
console.log(`name`, returnedFromDoSomethingWithName)