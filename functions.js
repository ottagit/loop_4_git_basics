const my_collection = [4, 7, 0, 6];

// Array map method
// array.map(callBack function)
// Increment each array index by 2
let new_array = my_collection.map((e, i) => i + 2);
console.log(new_array);

// Function definitions in JavaScript

// Function Declaration
let array_demo = [];

console.log("Original array", array_demo);

console.log(addTwo(4, 9, 7));

function addTwo(a,b,c) {
  array_demo.push(a,b,c);
  console.log("New look array following push operations", array_demo);

  let addByTwo = array_demo.map((e, i) => e + 2);
  return addByTwo;
}
/* ReferenceError thrown
console.log("Trial logging function scope binding outside the function", addByTwo);
*/
 

// Function Expression
array_demo = [];

const ongezaMbili = function(a, b, c) {
  array_demo.push(a,b,c);
  console.log("New look array following push operations", array_demo);

  let addByTwo = array_demo.map((e, i) => e + 2);
  return addByTwo;
};
 
console.log(ongezaMbili(3, 8, 1));

// Arrow Function
let array_demo = [];

const zaidiYaMbili = (a, b, c) => {
  array_demo.push(a,b,c);
  console.log("New look array following push operations", array_demo);

  let addByTwo = array_demo.map((e, i) => e + 2);
  return addByTwo;
};

console.log(zaidiYaMbili(3, 8, 1)); 