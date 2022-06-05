
// function goodVsEvil(good, evil){
   
//   function findArr(params) {
//     return params
//      .split(' ')
//      .map(el => parseInt(el))
//   }

//   let arr = findArr(good);
//   let arr2 = findArr(evil);

//   let goodObj = {
//     Hobbits: 1,
//     Men: 2,
//     Elves: 3,
//     Dwarves: 3,
//     Eagles: 4,
//     Wizards: 10
//   };
  
//   let evilObj = {
//     Orcs: 1,
//     Men: 2,
//     Wargs: 2,
//     Goblins: 2,
//     UrukHai: 3,
//     Trolls: 5,
//     Wizards: 10
//   };

//   function findTotatPoints(obj, array) {
//     let total = 0;
//     const keys = Object.keys(obj)
//     .forEach((element, index) => {

//        total += obj[element] * array[index];
//     });
//     return total; 
//   }
    
//   let gds = findTotatPoints(goodObj, arr);
//   let evl = findTotatPoints(evilObj, arr2);

//   if (gds > evl) return 'Battle Result: Good triumphs over Evil'
    
//   if (gds < evl) return 'Battle Result: Evil eradicates all trace of Good'
    
//   return 'Battle Result: No victor on this battle field'
  
// }

// console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));
// console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'));
// console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'));