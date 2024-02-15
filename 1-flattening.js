let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
function reduce(array) {
    const conarray = array.reduce((a,b) => a.concat(b))
    return conarray
}
console.log(reduce(arrays))
// → [1, 2, 3, 4, 5, 6]