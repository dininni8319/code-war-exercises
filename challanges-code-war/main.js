//move zeros to the right
// function moveZeros(arr) {
//   let count = 0;
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     element === 0 ? count++ : newArr = [...newArr, element]
//   }
  
//   let arrWithZeros = [...newArr];

//   for (let j = 0; j < count; j++) {
    
//      arrWithZeros.push(0);
//   }
  
//   return arrWithZeros;
// }

function moveZeros(arr) {
  return arr.filter(el => el !== 0).concat(arr.filter(el => el === 0));
}

//  function moveZeros(arr) {
//    let result = arr.filter(el => el !== 0);
//    let count = arr.length - result.length;

//    return result.concat(Array(count).fill(0))
//  }
// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
// returns[false,1,1,2,1,3,"a",0,0]

//The renge function
function arrayRange(numStart, numStop, numSteps) {
  let arr = [];
 
  if (numStart && numStop === 0) return arr;

  for (let i = (numStop ? numStart : 0); i < (numStop ? numStop : numStart); (numSteps ? i += numSteps : i++)) {
    if (numSteps === 0) {
      console.log(numSteps, 'testing');
      arr = [...arr, numStart]
    } else {
      let el = i;
      arr = [...arr, el];
    }
  }
  return arr;
}

function range(start, stop, step) {
  
  return arrayRange(start, stop, step);      
}

// console.log(range(1, 4, 5)); done
// range(1, 11); done
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// range(0);// done
// => []

// range(10, 0); // /!\ note that the end is before the start
// => [] i think that this is done

// range(10);
// => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] i think is done 
