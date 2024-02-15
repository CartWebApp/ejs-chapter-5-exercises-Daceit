// Your code here.
function loop(num,test,change,output){
    for(n = num;test;change){
        output(n)
    }
}

loop(3, n => n > 0, n => n - 1, console.log);

// → 3
// → 2
// → 1