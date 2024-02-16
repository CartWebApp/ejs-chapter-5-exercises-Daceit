// Your code here.
function loop(num,test,change,output){
    let n = num
   if (!test(n)){
      return "";
   } else {
    output(n);
    n = change(n);
    loop(n, test, change, output);
   }
}

loop(3, n => n > 0, n => n - 1, console.log);

// → 3
// → 2
// → 1