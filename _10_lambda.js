// Example of a simple lambda (arrow) function
const add1 = (a, b) => {
  return a + b;
};

// Implicit return — no braces, no `return` keyword
const add2 = (a, b) => a + b;

console.log(add1(3, 5)); // 8
console.log(add2(3, 5)); // 8

// Example of using a callback function to process each item in an array
function processItem(nextItem) {
    console.log(nextItem);
}
arrayOfItems = ["item1", "item2", "item3"];
arrayOfItems.forEach(processItem);
arrayOfItems.forEach(item => console.log(item)); 


