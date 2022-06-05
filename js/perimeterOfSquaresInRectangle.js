function perimeter(n) {
  let sum = 0;
  
  for (let i = n; i >= 0; i--) {
    const element = i;
    sum += i
    
    
  }
  return sum * 4;
}

console.log(perimeter(0)); //4
console.log(perimeter(5));  //60
console.log(perimeter(7));  //112
console.log(perimeter(20));  //840
console.log(perimeter(30));  //1860