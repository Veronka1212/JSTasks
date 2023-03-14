Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};
function f(x) {
    console.log(x);
}

f.defer(1000)(1);