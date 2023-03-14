function sum(a){
    sum.count += a;
    return sum;
}

sum.count = 0;

sum.toString = function(){
    let count = sum.count;
    sum.count = 0;
    return count;
}