function every(array, test) {
    // Your code here.
    for (let x = 0; x < array.length; x++) {
   if (!test(array[x])){
    return false
   }
   } return true
   }
function everySome(array,test){
  return !array.some((n)=>!(test(n)));
}

  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true

  console.log(everySome([1, 3, 5], n => n < 10));
  // → true
  console.log(everySome([2, 4, 16], n => n < 10));
  // → false
  console.log(everySome([], n => n < 10));
  // → true