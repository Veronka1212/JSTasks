function delay(f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}
let f1000 = delay(console.log(1111), 10000);

f1000();