// 1. Fake news !
// Create a “fakeNews” function that logs the number of fake news within an array.
const news = [true, false, false, true, false, false, false, true, true, true];

// long method
function fakeNews(news) {
  let count = 0;

  for (let i = 0; i < news.length; i++) {
    const el = news[i];
    el === true ? count++ : null;
  }

  return count;
}
 
// short method
// const fakeNews = () => news.map(el =>  Number(el)).reduce((acc, curr) => acc + curr);

// console.log('fake news: ', fakeNews(news)); // Output: 5

// 2. The Echo
// Write a function that logs the argument (string) minus two letters until only the first letter is left. Use recursion.

// Example:
// const yodel = "Yodelayheeeeehooooo"

// function echo(str) {
//   let count = 0;
//   let newString = '';
  
//   for (let i = 0; i < str.length / 2; i++) {
//     let word = str.slice(0, str.length - count);
//     console.log("🚀 ~ echo ~ word:", word)
//     count = count + 2;
//   }
//   return newString;
// }

const yodel = "Yodelayheeeeehooooo";

// function echo(str) {
//   let newString = '';
  
//   for (let i = str.length; i > 0; i -= 2) {
//     let word = str.slice(0, i);
//     newString += word + '\n';
//   }
  
//   return newString;
// }
// console.log(echo(yodel));

// 3. Create a calculator
// Create a calculator that allows a user to send 2 numbers, the type of operation and return the result.

function calculator(number1, number2, str) {
  if (number1 === 0 || number2 === 0) {
    return "Cannot divide by 0";
  }
  switch(str) {
    case "+": 
      return number1 + number2;
    case "-": 
      return number1 + number2;
    case '-': 
      return number1 - number2;
    case '/': 
      return number1 / number2;
    case '*': 
      return number1 * number2
  } 
}

// console.log(calculator(5, 7, '*')); // 35
// console.log(calculator(2, 10, "+")) // 12
// console.log(calculator(20, 3, "*")) // 60
// console.log(calculator(10, 0, "/")) // Cannot divide by 0

// 4. Social distancing
// Use OOP for this exercise.

// Create a class Distanciation to initialize a circle that accept one argument: the radius. Use the radius and create 1 method to get the area of this security circle (PI*r^2) and another one to get the perimeter (2PI*r).

// Example:

class SocialDistancing {
  static PI = 3.14159265359;
  constructor(radios) {
    this.radios = radios;
  }

  getArea() {
    return (SocialDistancing.PI * this.radios **2).toFixed(2);
  }

  getPerimeter() {
    return 2 * (SocialDistancing.PI * this.radios).toFixed(2);
  }
}

const circle = new SocialDistancing(5);

// console.log(circle.getArea()); // 78.539816
// console.log(circle.getPerimeter()); // 31

// 6. myEach
// Define a myEach function that simulates the forEach method on Array.

// myEach should be a function that expects an array and a function.

// DO NOT USE forEach in the implementation

// function myEach(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     const item = array[i];
//     callback(item)
//   }
// }

// myEach([1, 2, 3], (item) => {
//   console.log(`Item ${item}`)
// });

// 7. myMap
// Define a myMap function that simulates the map method on Array.

// DO NOT USE map, but you can use your own myEach.
// function myMap(array, callback) {
//   const newArray = new Array();
//   for (let i = 0; i < array.length; i++) {
//     const item = array[i];
//     newArray.concat(callback(item));
//   }
//   // console.log('first array',array);
//   return newArray;
// }

// myMap([1,2,3,4,5,6,7], (el) => console.log(el * 2))

// 8. myFilter
// Define a myFilter function that simulates the filter method on Array.

// DO NOT USE filter, but you can use your own myEach.