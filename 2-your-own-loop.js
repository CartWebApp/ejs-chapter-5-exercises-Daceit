// Your code here.
function loop(num,test,change,output){
    const n = num
   if (test(n) === false){
      output(n)
   } else if (test(n) === true) {
    output(n)
    change(n);
    num = n
   }
}

loop(3, n => n > 0, n => n - 1, console.log);

// → 3
// → 2
// → 1