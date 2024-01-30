// function myFunction(a, b) {
//   if (a.hasOwnProperty(b) && a[b]) {
//     return true
//   } else {
//     return false
//   } 
// }

//second solution
// function myFunction(a, b) {
//   return b in a;
// }


// function myFunction(a, b) {
//   return Boolean(a[b]);
// }
// console.log(myFunction({ a: 1, b: 2, c: 3 }, 'b')) // Expected true
// console.log(myFunction({ x: 'a', y: 'b', z: 'c' }, 'a')) //Expected false
// console.log(myFunction({ x: 'a', y: 'b', z: undefined }, 'z')) // Expected true

//Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwise.
// console.log(myFunction({ a: 1, b: 2, c: 3 }, 'b')) //Expected true
// console.log(myFunction({ x: 'a', y: null, z: 'c' }, 'y')) //Expected false
// console.log(myFunction({ x: 'a', b: 'b', z: undefined }, 'z')) //Expected false

//Write a function that takes two strings(a and b) as arguments.Create an object that has a property with key 'a' and a value of 'b'.Return the object.
// function myFunction(a, b) {
//   let obj = {};
//   obj[a] = b;
//   return obj;
// }

//second solution
// function myFunction(a, b) {
//   return { [a]: b };
// }

// function myFunction
//   (
//     a, b
//   ) {
//   let obj = {}

//   for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     obj[element] = b[i];

//   }
//   return obj
// }

// function
//   myFunction
//   (
//     a, b
//   ) {

//   const obj = {};
//   a.forEach((element, index) => {
//     obj[element] = b[index];
//   })
//   return obj
// }

// function
//   myFunction
//   (
//     a, b
//   ) {
//   const obj = Object.fromEntries(
//     a.map((key, index) => [key, b[index]]),
//   );

//   return obj;
// }


// function myFunction(a, b) {
//   return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
// }

// console.log(myFunction(['w', 'x', 'y', 'z'], [10, 9, 5, 2]));
// console.log('====================================');
// console.log(myFunction([1, 'b'], ['a', 2]));
// console.log('====================================');
//Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.
// function myFunction(a, b) {
//   let obj = {};
//   obj[a] = b;
//   return obj;
// }

//Write a function that takes an object as argument.In some cases the object contains other objects with some deeply nested properties.Return the property 'b' of object 'a' inside the original object if it exists.If not, return undefined
// function myFunction(a) {
//   return a.a ? a.a.b : undefined;
// }

// function
//   myFunction
//   (
//     obj
//   ) {
//   let key1 = Object.keys(obj)
//   if (typeof obj[key1] === 'object') {
//     let key2 = Object.keys(obj[key1])
//     return obj[key1][key2]
//   }
//   return undefined
// }

// console.log(myFunction({ a: { b: 'x' } }));
// console.log(myFunction({ a: { b: { c: 3 } } }))
// console.log(myFunction({ a: 1 }))

//Write a function that takes two date instances as argument. It should return the number of days that lies between those dates.
// function myFunction(a, b) {
//   return Math.abs((a.getTime() - b.getTime()) / (60 * 60 * 24 * 1000));
//   // console.log(date1);
// }

// function myFunction(a, b) {
//   const dif = Math.abs(a - b);
//   return dif / 1000 / 60 / 60 / 24
// }

// function
//   myFunction
//   (
//     a, b
//   ) {
//   const dif = Math.abs(a - b);

//   return dif === 0 ? true : false
// }

// function
//   myFunction
//   (
//     a, b
//   ) {

//   const timeA = a.getTime()
//   const timeB = b.getTime()
//   let diffInMinutes = Math.floor(((timeB-timeA)/(1000) / 60))

//   if (diffInMinutes <= 60) return true
//   return false
// }

// function myFunction(a, b) {
//   return Math.abs(a - b) / 1000 / 60 <= 60
// }

// console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
// console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:30:00')));

// function myFunction(a, b) {
//   return a.getTime() < b.getTime() ? true : false
// }

//second solution
// function myFunction(a, b) {
//   return a < b
// }
// console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
// console.log(myFunction(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00')));

// function
//   myFunction
//   (
//     set
//   ) {
//   // console.log(set);
//   // return Array.from(set) //first solution
//   return [...set] ///second dolution
// }
// console.log(myFunction(new Set(['1', '2', '3'])));
// console.log(myFunction(new Set([1, 2, 3])));

// function myFunction(a, b) {
//   const result = new Set(a);
//   b.forEach((el) => result.add(el));
//   return result;
// }
// function myFunction(a, b) {
//   return  new Set([...Array.from(a),...Array.from(b)])
// }

// console.log(myFunction(new Set('123'), new Set('234')));
// console.log(myFunction(new Set([1, 2, 3]), new Set([3, 4, 5])));
// console.log(myFunction(new Set([false, false, NaN]), new Set([true, true, NaN])));

// function myFunction(a, b, c) {
//   const set = new Set();
//   set.add(a);
//   set.add(b);
//   set.add(c);
//   return set;
// }

// function
//   myFunction
//   (
//     set, val
//   ) {
//   let arr = [...set]
//   let arr2 = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== val) {
//       arr2.push(arr[i])
//     }
//   }
//   return new Set(arr2)
// }


// second solution
// function
//   myFunction
//   (
//     set, val
//   ) {
//   let arr = [...set]

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       arr.splice(i, 1)
//     }
//   }
//   return new Set(arr)
// }
// console.log(myFunction(new Set('12345'), '3'));
// console.log(myFunction(new Set([1, 2, 3]), 1));

//Write a function that takes a Set and a value as argument.If existing in the Set, remove the value from the Set.Return the result
// function myFunction(set, val) {
//   set.delete(val);
//   return set;
// }

// function
//   myFunction
//   (
//     a
//   ) {
//                 //start //end
//   return a.slice(3, a.length)
//   // return a.slice(3)
// }

// function
//   myFunction
//   (
//     a
//   ) {
//              //start //end
//   return a.slice(-3, a.length)
//   // return a.slice(-3) 
// }
// console.log(myFunction([5, 4, 3, 2, 1, 0]));
// console.log(myFunction([1, 2, 3, 4]));
// console.log(myFunction([99, 1, 1])
// );

// function myFunction(a, n) {
  //  return a.slice(-n)

// }

// function
//   myFunction
//   (
//     a, b
//   ) {

//   return a.filter(el => el !== b)
// }

// console.log(myFunction([false, '2', 1], false));
// console.log(myFunction([1, 2, '2'], 2));
// console.log(myFunction([1, 2, 3], 2));

// function
//   myFunction
//   (
//     a, b
//   ) {
//   for (let i = 0; i < a.length; i++) {
//     const el= a[i];
//     if( el === b)
//      a.splice(el, 1)
//   }
//   return a
// }

// console.log(myFunction([false, '2', 1], false));
// console.log(myFunction([1, 2, '2'], 2));
// console.log(myFunction([1, 2, 3], 2));

// function myFunction(a) {
//   let index
//     for (let i = 0; i < a.length; i++) {
//       const el = a[i];
//       if (el === 'i') {
//         index = i
//     }
//   }

//   return index
// }
// Write a function that takes a string as argument.The string contains the substring 'is'.Return the index of 'is'.
// function myFunction(a) {

//   return a.indexOf('is')
// }
// console.log(myFunction("praise"));
// console.log(myFunction("risky"));
// console.log(myFunction("paris"));

// function myFunction(a) {
//   return a.slice(0, a.length / 2);
// }

// function myFunction(a) {
//   return a.slice(0, -3);
// }
// Return the percentage of a number
// function myFunction(a, b) {
//   return b / 100 * a
// }
// Math operators
// function myFunction(a, b, c, d, e, f) {
//   return (((a + b - c) * d) / e) ** f;
// }

// Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation
// function myFunction(a, b) {
//   return a.includes(b) ? b + a : a + b;
// }

// function myFunction(a, b) {
//   return a.indexOf(b) === -1 ? a + b : b + a
// }

// write function that checks if the number as parameter is even
// function myFunction(a) {
//   return a % 2 === 0 ? true : false
// }

// function
//   myFunction
//   (
//     a, b
//   ) {

//   return b.split('').filter(el => el === a).length
// }

/// second solution
// function myFunction(a, b) {
//   return b.split(a).length - 1
// }

//Write a function that takes a number(a) as argument.If a is a whole number(has no decimal place), return true.Otherwise, return false.
// function myFunction(a) {
//   return Number.isInteger(a) ? true : false
// }
// console.log(myFunction('h', 'how many times does the character occur in this sentence?'))

// second solution
// function myFunction(a) {
//   return a - Math.floor(a) === 0
// }

// function
//   myFunction
//   (
//     a, b
//   ) {

//   return a < b ? a / b : a * b
// }


// function myFunction(a) {
//   return Number(a.toFixed(2));
// }

// function
//   myFunction
//   (
//     a
//   ) {

//   return String(a).split('').map(el => Number(el))
// }