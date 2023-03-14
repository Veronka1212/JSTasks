function throttle(f, ms) {
    name.flag = true
    function name() {
        name.arg = arguments
        if (name.flag) {
            name.lastArg = name.arg
            f.call(this, ...name.arg)
            name.flag = false
        }
        let interval = setInterval(function() {
            if (name.lastArg === name.arg) {
                clearInterval(interval)
            } else {
                f.call(this, ...name.arg)
                name.lastArg = name.arg
            }
        }, ms);
    }
    return name
}
function f(a) {
    console.log(a)
}
// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано