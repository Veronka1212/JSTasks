let arr = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b){
    arr.forEach((item, index) => {
        if(!(a <= item && item <= b)) arr.splice(index, 1);
    });
}

console.log(arr);
filterRangeInPlace(arr, 1, 4);
console.log(arr);